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
    classPrefix: React.PropTypes.string
  },
  render() {
    const prefix = this.props.classPrefix || Icon.defaultFontPrefix;
    let className = `${prefix} ${prefix}-${this.props.glyph}`;
    if (this.props.className) {
      className += ` ${this.props.className}`;
    }

    return <span className={className} {...this.props}></span>;
  }
});

module.exports = Icon;
