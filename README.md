# React Icon
[![Build Status](https://circleci.com/gh/nkt/react-icon.svg?style=svg)](https://circleci.com/gh/nkt/react-icon)

Simple component for icons in your React app.

Installation
------------

```
npm install --save react-icon
```

Usage
-----

```js
const React = require('react');
const Icon = require('react-icon');

const StarCounter = React.createClass({
  render() {
    return (
      <div>
        <span>This user have {this.props.count}</span>
        <Icon glyph="star" />
      </div>
    );
  }
});

module.exports = StarCounter;
```

By default component uses `fa` as class prefix (`fa fa-star`).
This behavior customizable:

```js
const Icon = require('react-icon');

Icon.setDefaultFontPrefix('glyphicon') // glyphicon glyphicon-star
```

License
-------
[![License](https://img.shields.io/npm/l/react-icon.svg)](LICENSE)
