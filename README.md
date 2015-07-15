
## react-cli
[![Build Status][travis-badge]][travis-badge-url]
[![Dependency Status][david-badge]][david-badge-url]
[![devDependency Status](https://david-dm.org/blairanderson/react-cli/dev-status.svg)](https://david-dm.org/blairanderson/react-cli#info=devDependencies)
[![Build status][appveyor-badge]][appveyor-badge-url]
[![Code Climate](https://codeclimate.com/github/blairanderson/react-cli/badges/gpa.svg)](https://codeclimate.com/github/blairanderson/react-cli)
[![Test Coverage](https://codeclimate.com/github/blairanderson/react-cli/badges/coverage.svg)](https://codeclimate.com/github/blairanderson/react-cli)
[![Inline docs](http://inch-ci.org/github/blairanderson/react-cli.svg?branch=master)](http://inch-ci.org/github/blairanderson/react-cli)

The React.js command line utility.

Supports node 0.12.x and npm 2.6.x.

## Community
* issues: [ember-cli/issues](https://github.com/blairanderson/react-cli/issues)
* website: [https://github.com/blairanderson/react-cli](https://github.com/blairanderson/react-cli)

## Project Elements
Additional components of this project which are used at runtime in your application:
* [ember-resolver](https://github.com/ember-cli/ember-resolver)
* [loader](https://github.com/ember-cli/loader.js)
* [ember-cli-shims](https://github.com/ember-cli/ember-cli-shims)
* [ember-load-initializers](https://github.com/ember-cli/ember-load-initializers)

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
react new foo
cd foo
npm link react-cli
react server
```

`npm link react-cli` is needed because by default the globally installed `react-cli` just loads the local `react-cli` from the project. `npm link react-cli` symlinks the global `react-cli` package to the local `react-cli` package. Now the `react-cli` you cloned before is in three places: The folder you cloned it into, npm's folder where it stores global packages and the `react-cli` project you just created.

If you upgrade an app running against Ember CLI master you will need to re-link to your checkout of Ember CLI by running `npm link react-cli` in your project again.

Please read the official [npm-link documentation](https://www.npmjs.org/doc/cli/npm-link.html) and the [npm-link cheatsheet](http://browsenpm.org/help#linkinganynpmpackagelocally) for more information.

### Working with the tests

Use `npm test` to run the tests (Runs only fast tests).

For a full test run which includes some very slow acceptance tests,
please run: `npm run test-all`. Please note, this is what travis
runs.

To exclude a test or test suite append a `.skip` to `it()` or `describe()` respectively (e.g. `it.skip(...)`). To focus on a certain test or test suite append `.only`.

Please read the official [mocha documentation](http://mochajs.org/) for more information.

## Problems

When running ember cli it could happen that a lack of file watches can occur. You will get an error message like:

```sh
Serving on http://localhost:4200
watch ENOSPC
Error: watch ENOSPC
    at errnoException (fs.js:1019:11)
    at FSWatcher.start (fs.js:1051:11)
  ...
```

This problem will be corrected in future releases. The following line is a workaround to get the server up and running until this problem is fixed. See [Issue 1054](https://github.com/blairanderson/react-cli/issues/1054).

```sh
echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p
```

For Arch Linux or Manjaro Linux, in order for the parameters to be loaded at boot, the kernel sysctl parameters have to be saved in a drop-in directory instead of `sysctl.conf`.

```sh
echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.d/99-sysctl.conf && sudo sysctl --system
```

## Inline Documentation

Use `npm run docs` to build HTML and JSON documentation with YUIDoc and place it in `docs/build/`. Please help by improving this documentation.

## Contribution

[See `CONTRIBUTING.md`](https://github.com/blairanderson/react-cli/blob/master/CONTRIBUTING.md)

## Upgrading

## Donating

All donations will support this project and treats for contributors.

[![Support via Gittip](https://rawgithub.com/twolfson/gittip-badge/0.2.0/dist/gittip.png)](https://www.gittip.com/stefanpenner/)

## License

ember-cli is [MIT Licensed](https://github.com/blairanderson/react-cli/blob/master/LICENSE.md).


[travis-badge]: https://travis-ci.org/blairanderson/react-cli.svg?branch=master
[travis-badge-url]: https://travis-ci.org/blairanderson/react-cli
[david-badge]: https://david-dm.org/blairanderson/react-cli.svg
[david-badge-url]: https://david-dm.org/blairanderson/react-cli
[appveyor-badge]: https://ci.appveyor.com/api/projects/status/7owf61lo8uujbjok/branch/master?svg=true
[appveyor-badge-url]: https://ci.appveyor.com/project/embercli/ember-cli/branch/master
