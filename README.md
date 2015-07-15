
## react-cli

The React.js command line utility.

## Development Hints
### Working with master

``` sh
git clone https://github.com/blairanderson/react-cli.git
cd react-cli
npm link
```

`npm link` is very similar to `npm install -g` except that instead of downloading the package from the repo the just cloned `ember-cli/` folder becomes the global package. Any changes to the files in the `react-cli/` folder will immediately affect the global react-cli package.

Now you can use `react-cli` via the command line:

``` sh
react new todo
cd foo
npm start
```

Please read the official [npm-link documentation](https://www.npmjs.org/doc/cli/npm-link.html) and the [npm-link cheatsheet](http://browsenpm.org/help#linkinganynpmpackagelocally) for more information.

### Working with the tests

Use `npm test` to run the tests (Runs only fast tests).

For a full test run which includes some very slow acceptance tests,
please run: `npm run test-all`. Please note, this is what travis
runs.

To exclude a test or test suite append a `.skip` to `it()` or `describe()` respectively (e.g. `it.skip(...)`). To focus on a certain test or test suite append `.only`.

Please read the official [mocha documentation](http://mochajs.org/) for more information.

## Project Elements
Additional components of this project which are used at runtime in your application:
* [ember-resolver](https://github.com/ember-cli/ember-resolver)
* [loader](https://github.com/ember-cli/loader.js)
* [ember-cli-shims](https://github.com/ember-cli/ember-cli-shims)
* [ember-load-initializers](https://github.com/ember-cli/ember-load-initializers)

## Problems


## Inline Documentation

Use `npm run docs` to build HTML and JSON documentation with YUIDoc and place it in `docs/build/`. Please help by improving this documentation.

## Contribution

[See `CONTRIBUTING.md`](https://github.com/blairanderson/react-cli/blob/master/CONTRIBUTING.md)

## Upgrading

## Donating

All donations will support ember-cli project and treats for contributors.

[![Support via Gittip](https://rawgithub.com/twolfson/gittip-badge/0.2.0/dist/gittip.png)](https://www.gittip.com/stefanpenner/)

## License

react-cli is [MIT Licensed](https://github.com/blairanderson/react-cli/blob/master/LICENSE.md).
