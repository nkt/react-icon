const React = require('react');

const Icon = React.createClass({
  statics: {
    defaultFontPrefix: 'fa',
    setDefaultFontPrefix(prefix) {
      Icon.defaultFontPrefix = prefix;
    }
  },
  propTypes: {
    glyph: React.PropTypes.string.isRequired,
    classPrefix: React.PropTypes.string.isRequired
  },
  getDefaultProps() {
    return {
      classPrefix: Icon.defaultFontPrefix
    };
  },
  render() {
    const prefix = this.props.classPrefix;
    let className = `${prefix} ${prefix}-${this.props.glyph}`;
    if (this.props.className) {
      className += ` ${this.props.className}`;
    }

    return <span className={className} {...props}></span>;
  }
});

module.exports = Icon;
