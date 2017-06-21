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

You can create your react component and published on [npm](https://www.npmjs.com).

For example, if I already published and I want to use this component：

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

In your website, you can see `Hello World` as title.

## Test

```sh
$ npm test
```

## LICENSE

MIT
