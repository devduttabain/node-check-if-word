# check-if-word

check if the word exist in the language configured, the language could be english or spanish. built on top of check-word by 
[s0c5]<david.barinas.dev@gmail.com>. 

### install

```bash
$ npm install check-if-word
```

### how to use?

```javascript
var checkWord = require('check-if-word'),
    words     = checkWord('en'); // setup the language for check, default is en
    
words.check('dog'); // true
words.check('perro'); // false
words.check('hi'); // true


words.getValidWords(["ajsk", "no", "object", "opal", "perl", "perlpali"]); // [ 'no', 'object', 'opal' ]

...

```

### credits

thanks to repository  [atebits/words](https://github.com/atebits/Words) and [s0c5]<david.barinas.dev@gmail.com>.




