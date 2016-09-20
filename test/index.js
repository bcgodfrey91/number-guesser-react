const assert = require('chai').assert;
const Scrabble = require('../lib/Components/Scrabble.js');

describe('Our Test Bundle', function() {
 it('should work', function() {
   assert(true);
 });

 context('Scrabble', function() {
   it('should have an input field', function() {
     assert(true);
   });

   it('should be a function', function() {
     const scrabble = new Scrabble();
     assert.isFunction(scrabble.scoreWord);
   });

   it('should return the total score of the word', function() {
     const scrabble = new Scrabble();
     const result = scrabble.scoreWord('hello')
     assert.equal(result, 8);
   });

   it('should return 8 for the word "hello"', function() {
     const scrabble = new Scrabble();
     const result = scrabble.scoreWord('hell9o')
     assert.equal(result, 8);
   });

   it('should return 0 if an empty string or any non-string', function() {
     const scrabble = new Scrabble();
     const result = scrabble.scoreWord('')
     assert.equal(result, 0);
   });


   it('should strip any whitespaces before or after the word', function() {

   });

   it('should take an optional second argument for the word multiplier', function() {

   });

 });
});
