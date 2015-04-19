// Parses commands from calling 'socketstream' on the CLI
//
'use strict';



// Dependencies
//
var generator = require('./lib/generate');



/**
 * Processes the command line arguments passed to SocketStream
 *
 * @param  {[type]}   	program  	The commander program instance
 * @param  {Function}   cb  		An optional callback to execute when finished
 * @return {Void}
 */
exports.process = function (program,cb) {
  switch (program.args[0]) {

    // Create a new project
    case 'new':
    case 'n':
      return generator.generate(program,cb);
    default:
      return console.log('Type "socketstream new <projectname>" to create a new application');
  }
};