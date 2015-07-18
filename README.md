# Scale names

A dictionary of musical scales names.

## JSON Data

You can copy the json files from this repo and use a HttpRequest to load the data in the browser.
Within npm, you can install the module: `npm install --save scale-names`, and require the json data directly:

```js
var dictionary = require('scale-names/all.json');
```

The data is in the format of `{ 'scaleNumber': ['array', 'of', 'string', 'names'] }`

## Library

```js
var Names = require('scale-names')
Names.load(dictionary)
```

Then, you can get the scale names from its decimal number, or the inverse:

```js
Names.get(2773); // => ['major', 'ionian']
Names.getDecimal('major'); // => 2773
```

If you don't know what this numbers are, take a look at [2048-scales](http://github.com/danigb/2048-scales)

## API

#### Names.load(dictionary)

Load the JSON data

#### Names.get(decimal)

Return an array of strings. _Always returns an array__ even if its empty:

```js
Names.get(1231243); // => []
```

#### Names.getDecimal(name)

Get the decimal number of a scale name, if any.

```js
Names.getDecimal('major'); // => 2773
Names.getDecimal('unkonwn'); // => null
```

#### Names.all()

return an array with all the available names

## License

Since most of the data are from impro-visor, this uses the same license:
GNU Public License 2.0
