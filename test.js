const assert = require('assert');

const checkWords = require('./index');
const englishWords = checkWords('en');

const words = [
  ['hello', true],
  ['aa', true],
  ['zymogenesis', true],
  ['sam', true],
  ['zzzzzzzzzzzzzzz', false],
  ['Sam', true],
  ['SAM', true],
  ['zzzs', true],
];

function testWords(words) {
  function test([word, expected]) {
    assert(englishWords.check(word) === expected);
  }

}

testWords(words);




//test 2
const expectedValidWords = ['no', 'object', 'opal'],
  mixedWords = ["ajsk", "no", "object", "opal", "perl", "perlpali"];
const validWords = englishWords.getValidWords(mixedWords);


function test2(word) {
  assert(expectedValidWords.indexOf(word) > -1);
}
validWords.forEach(test2);