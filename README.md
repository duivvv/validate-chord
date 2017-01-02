# validate-chord

![Node](https://img.shields.io/node/v/validate-chord.svg?style=flat-square)
[![NPM](https://img.shields.io/npm/v/validate-chord.svg?style=flat-square)](https://www.npmjs.com/package/validate-chord)
[![Travis](https://img.shields.io/travis/duivvv/validate-chord/master.svg?style=flat-square)](https://travis-ci.org/duivvv/validate-chord)
[![David](https://img.shields.io/david/duivvv/validate-chord.svg?style=flat-square)](https://david-dm.org/duivvv/validate-chord)
[![Coverage Status](https://img.shields.io/coveralls/duivvv/validate-chord.svg?style=flat-square)](https://coveralls.io/github/duivvv/validate-chord)
[![Gitmoji](https://img.shields.io/badge/gitmoji-%20😜%20😍-FFDD67.svg?style=flat-square)](https://gitmoji.carloscuesta.me/)

> 🎼 Validates a chord (scientific pitch notation) and throws errors if needed

### Usage

```js
import validateChord from 'validate-chord';

const chord = validateChord(`A#3m`);
console.log(chord);

// > { note: { letter: 'A', signature: '#', octave: 3 }, type: 'minor' }
```

currently validates:

- minor (m, min, minor)
- major ('', maj, major)
- augmented (aug)
- diminished (dim)

[PR welcome](src/data/types.js) for more chord types

### Installation

Install via [yarn](https://github.com/yarnpkg/yarn)

	yarn add validate-chord (--dev)

or npm

	npm install validate-chord (--save-dev)


### configuration

You can pass in extra options as a configuration object (➕ required, ➖ optional, ✏️ default).

```js
import validateChord from 'validate-chord';

const chord = validateChord(`A3m`, {maxOctave: 5, flatToSharp: true});
console.log(chord);
```

➖ **maxOctave** ( Number ) ` ✏️ 8 `
<br/> 📝 max octave allowed

➖ **flatToSharp** ( Boolean ) ` ✏️ false `
<br/> 📝 convert flats (b) to sharps (#)

### Examples

See [`example`](example/script.js)

### Builds

If you don't use a package manager, you can [access `validate-chord` via unpkg (CDN)](https://unpkg.com/validate-chord/), download the source, or point your package manager to the url.

`validate-chord` is compiled as a collection of [CommonJS](http://webpack.github.io/docs/commonjs.html) modules & [ES2015 modules](http://www.2ality.com/2014/0
  -9/es6-modules-final.html) for bundlers that support the `jsnext:main` or `module` field in package.json (Rollup, Webpack 2)

The `validate-chord` package includes precompiled production and development [UMD](https://github.com/umdjs/umd) builds in the [`dist` folder](https://unpkg.com/validate-chord/dist/). They can be used directly without a bundler and are thus compatible with many popular JavaScript module loaders and environments. You can drop a UMD build as a [`<script>` tag](https://unpkg.com/validate-chord) on your page. The UMD builds make `validate-chord` available as a `window.validateChord` global variable.

### License

The code is available under the [MIT](LICENSE) license.

### Contributing

We are open to contributions, see [CONTRIBUTING.md](CONTRIBUTING.md) for more info.

### Misc

This module was created using [generator-module-boilerplate](https://github.com/duivvv/generator-module-boilerplate).
