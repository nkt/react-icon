# React Icon
[![Version](https://img.shields.io/npm/v/react-icon.svg)](https://www.npmjs.com/package/react-icon)
[![Downloads](https://img.shields.io/npm/dm/react-icon.svg)](https://www.npmjs.com/package/react-icon)

Simple component for icons in your React app.

Installation
------------

```
npm install react-icon
```

Usage
-----

```jsx
var React = require('react');
var Icon = require('react-icon');

var StarCounter = React.createClass({
  render() {
    return (
      <div>
        <span>This user have {this.props.count}</span>
        <Icon glyph="star" />
      </div>
    );
  }
});
```

By default component uses `fa` as class prefix (`fa fa-star`).
This behavior customizable:

```js
var Icon = require('react-icon');

Icon.setDefaultFontPrefix('glyphicon') // glyphicon glyphicon-star
```

License
-------
[![License](https://img.shields.io/npm/l/react-icon.svg)](LICENSE)
