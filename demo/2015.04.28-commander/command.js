var program = require('commander');
 
  program.action(function (dir, otherDirs) {
    // console.log('rmdir %s', dir);
    // if (otherDirs) {
    //   otherDirs.forEach(function (oDir) {
    //     console.log('rmdir %s', oDir);
    //   });
    // }

    var args = Array.prototype.slice.call(arguments);
    // var options = args.pop();
    // var cmd = args.shift();
    console.log(args);
  });

program
  .version('0.0.1')
  .option('-d --dir', '= =b')
  .command('rmdir', 'command desc')
  // .description('just test description')
  // .action(function (dir, otherDirs) {
  //   console.log('rmdir %s', dir);
  //   if (otherDirs) {
  //     otherDirs.forEach(function (oDir) {
  //       console.log('rmdir %s', oDir);
  //     });
  //   }

  //   var args = Array.prototype.slice.call(arguments);
  //   // var options = args.pop();
  //   // var cmd = args.shift();
  //   console.log(args);
  // });


 
program.parse(process.argv);

console.log('hello world');

/*
  description的作用：在 -h --help 的时候

  adeMacBook-Pro-3:2015.04.28-commander a$ node command.js -h

  Usage: command [options] [command]


  Commands:

    rmdir <dir> [otherDirs...]  just test description

  Options:

    -h, --help     output usage information
    -V, --version  output the version number
*/