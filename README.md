# React Icon

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

Icon.setDefaultClassPrefix('glyphicon') // glyphicon glyphicon-star
```

License
-------
MIT
