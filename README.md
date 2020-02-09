# Cross Blob Util [![Travis CI Build Status](https://img.shields.io/travis/com/Richienb/cross-blob-util/master.svg?style=for-the-badge)](https://travis-ci.com/Richienb/cross-blob-util)

blob-util with cross-platform support.

[![NPM Badge](https://nodei.co/npm/cross-blob-util.png)](https://npmjs.com/package/cross-blob-util)

## Install

```sh
npm install cross-blob-util blob-util
```

## Usage

```js
const { base64StringToBlob } = require("cross-blob-util");

base64StringToBlob(
	"iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==",
	"image/png"
);
//=> Blob {...}
```

## API

See https://www.npmjs.com/package/blob-util#api
