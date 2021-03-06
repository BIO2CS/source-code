/***
 * Excerpted from "Async JavaScript",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material, 
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose. 
 * Visit http://www.pragmaticprogrammer.com/titles/tbajs for more book information.
***/
var myDomain = require('domain').create();
myDomain.run(function() {
  setTimeout(function() {
    throw new Error('Listen to me!')
  }, 50);
});

myDomain.on('error', function(err) {
  console.log('Error ignored!');
});