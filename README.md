# Scale names

A dictionary of musical scales names.

## Usage

Install the module: `npm install --save scale-names`

You can get the json data or a thin wrapper:

```js
// raw json data
var dictionary = require('scale-names/all.json');
// a thin wrapper
var Names = require('scale-names')(dictionary);
```

Then, you can get the scale names from a number of the inverse:

```js
Names.get(2773); // => ['major', 'ionian']
Names.getNumber('major'); // => 2773
```

If you don't know what this numbers are, take a look at [2048-scales](http://github.com/danigb/2048-scales)

## API

#### Names.get(decimal)

Return an array of strings. _Always returns an array__ even if its empty:

```js
Names.get(1231243); // => []
```

#### Names.getNumber(name)

Get the decimal number of a scale name, if any.

```js
Names.getNumber('major'); // => 2773
Names.getNumber('unkonwn'); // => null
```

#### Names.all()

return an array with all the available names

## License

MIT
