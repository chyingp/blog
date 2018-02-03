/*!
 * express
 * Copyright(c) 2009-2013 TJ Holowaychuk
 * Copyright(c) 2013 Roman Shtylman
 * Copyright(c) 2014-2015 Douglas Christopher Wilson
 * MIT Licensed
 */

'use strict';

/**
 * Module dependencies.
 * @private
 */

var debug = require('debug')('express:view');
var path = require('path');
var fs = require('fs');
var utils = require('./utils');

/**
 * Module variables.
 * @private
 */

var dirname = path.dirname;
var basename = path.basename;
var extname = path.extname;
var join = path.join;
var resolve = path.resolve;

/**
 * Module exports.
 * @public
 */

module.exports = View;

/**
 * Initialize a new `View` with the given `name`.
 *
 * Options:
 *
 *   - `defaultEngine` the default template engine name
 *   - `engines` template engine require() cache
 *   - `root` root path for view lookup
 *
 * @param {string} name
 * @param {object} options
 * @public
 */

function View(name, options) {
  var opts = options || {};

  this.defaultEngine = opts.defaultEngine; // 默认的渲染引擎
  this.ext = extname(name); // 文件扩展名，比如 .jade
  this.name = name; // 模板路径，可能是相对路径、绝对路径；可能包括扩展名、不包含扩展名；
  this.root = opts.root; // 模板所在路径

  // 没有扩展名，又没有模板的渲染引擎，无法推测改用什么渲染引擎，报错
  if (!this.ext && !this.defaultEngine) {
    throw new Error('No default engine was specified and no extension was provided.');
  }

  var fileName = name;

  // 文件路径不包含文件扩展名，比如 "index"
  if (!this.ext) {
    // 支持两种view engine的配置方式
    // 1、方式一：比如"jade"
    // 2、方式二：比如".jade"
    // 最终得到包含扩展名的文件路径，比如 "index.jade"
    // get extension from default engine name
    this.ext = this.defaultEngine[0] !== '.'
      ? '.' + this.defaultEngine
      : this.defaultEngine;

    fileName += this.ext; // 比如 "index.jade"
  }

  // 如果模板对应的渲染引擎还没加载，那么加载它，并挂载到 opts.engines 上
  // opt.engines => app.engines
  if (!opts.engines[this.ext]) {
    // 加载引擎，假设 this.ext === ".jade"
    // 那么加载的引擎为 require('jade').__express
    // 也就是说 app.engines['.jade'] => require('jade').__express
    // load engine
    opts.engines[this.ext] = require(this.ext.substr(1)).__express;
  }

  // 将已加载的引擎缓存起来，在接下来的实际 render 操作中要用到
  // 举例：this.engine = require('jade').__express
  // store loaded engine
  this.engine = opts.engines[this.ext];

  // 模板文件的绝对路径
  // 如果找不到该模板文件，this.path ==> undefined
  // lookup path
  this.path = this.lookup(fileName);
}

/**
 * Lookup view by the given `name`
 *
 * @param {string} name
 * @private
 */

View.prototype.lookup = function lookup(name) {
  var path;
  var roots = [].concat(this.root);

  debug('lookup "%s"', name);

  for (var i = 0; i < roots.length && !path; i++) {
    var root = roots[i];

    // resolve the path
    var loc = resolve(root, name);
    var dir = dirname(loc);
    var file = basename(loc);

    // resolve the file
    path = this.resolve(dir, file);
  }

  return path;
};

/**
 * Render with the given options.
 *
 * @param {object} options
 * @param {function} callback
 * @private
 */

View.prototype.render = function render(options, callback) {
  debug('render "%s"', this.path);
  this.engine(this.path, options, callback);
};

/**
 * Resolve the file within the given directory.
 *
 * @param {string} dir
 * @param {string} file
 * @private
 */

View.prototype.resolve = function resolve(dir, file) {
  var ext = this.ext;

  // <path>.<ext>
  var path = join(dir, file);
  var stat = tryStat(path);

  if (stat && stat.isFile()) {
    return path;
  }

  // <path>/index.<ext>
  path = join(dir, basename(file, ext), 'index' + ext);
  stat = tryStat(path);

  if (stat && stat.isFile()) {
    return path;
  }
};

/**
 * Return a stat, maybe.
 *
 * @param {string} path
 * @return {fs.Stats}
 * @private
 */

function tryStat(path) {
  debug('stat "%s"', path);

  try {
    return fs.statSync(path);
  } catch (e) {
    return undefined;
  }
}
