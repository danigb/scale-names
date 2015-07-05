# scale-names

A list of musical scales. See all.json or common.json

## Usage

Install the module: `npm install --save scale-names` and require the module AND the dictionary:

```js
var dictionary = require('scale-names/all.json');
var Names = require('scale-names')(dictionary);
```

Then, you can get the scale names of a scale number:

```js
Names.get(2773); // => ['major', 'ionian']
```

__Names.get() always returns an array__ even if its empty.

or get the number of the given name:

```js
Names.getNumber('major'); // => 2773
```

If you don't know what this numbers are, take a look at [2048-scales](http://github.com/danigb/2048-scales)

## License

MIT
