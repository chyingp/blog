var expect = require('chai').expect;
var assert = require('assert');

describe('Array', function() {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      expect([1,2,3].indexOf(5)).to.equal(-1);
    });
  });
});

var ActionTypes = require('../constants/ActionTypes');
var TodoActions = require('../actions/TodoActions');

describe('Todo Actions', function() {
	it('should create an action to add a todo', function () {
		var text = 'reading';
		var result = {
			type: ActionTypes.ADD_TODO,
			text: text
		};
	  	expect(TodoActions.addTodo(text)).to.deep.equal(result);
	});
});

// 异步测试
describe('Todo Actions', function() {
	it('should create an action to add a todo', function () {
		var text = 'reading';
		var result = {
			type: ActionTypes.ADD_TODO,
			text: text
		};
	  	expect(TodoActions.addTodo(text)).to.deep.equal(result);
	});
});