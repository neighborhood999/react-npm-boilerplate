# react-npm-boilerplate

[![Build Status](https://travis-ci.org/neighborhood999/react-npm-boilerplate.svg?branch=unit-test)](https://travis-ci.org/neighborhood999/react-npm-boilerplate)
[![Coverage Status](https://coveralls.io/repos/github/neighborhood999/react-npm-boilerplate/badge.svg?branch=unit-test)](https://coveralls.io/github/neighborhood999/react-npm-boilerplate?branch=unit-test)
[![Dependency Status](https://david-dm.org/neighborhood999/react-npm-boilerplate.svg)](https://david-dm.org/neighborhood999/react-npm-boilerplate)

Make your personal react component.

## How To Use

First, install package：

```sh
$ npm install
```

You can make react component and in other App import use it.  
Publish your npm packages to npmjs and you can add to your dependencies.  

For example, if I add this component：

```js
import React, { Component } from 'react';
import Test from 'react-npm-boilerplate';

export default class App extends Component {
  render() {
    return (
      <Test />
    );
  }
}
```

and finally in website, you can see `Hello World` this title.

## Lint

```sh
$ npm run lint
```

## Test

```sh
$ npm test
```

## LICENSE

MIT
