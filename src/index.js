const React = require('react');

const Icon = React.createClass({
  displayName: 'Icon',
  propTypes: {
    glyph: React.PropTypes.string.isRequired,
    classPrefix: React.PropTypes.string,
    children: React.PropTypes.node
  },
  statics: {
    defaultFontPrefix: 'fa',
    setDefaultFontPrefix(prefix) {
      Icon.defaultFontPrefix = prefix;
    }
  },
  render() {
    const prefix = this.props.classPrefix || Icon.defaultFontPrefix;
    let className = `${prefix} ${prefix}-${this.props.glyph}`;
    if (this.props.className) {
      className += ` ${this.props.className}`;
    }

    return (
      <span {...this.props} className={className}>
        {this.props.children}
      </span>
    );
  }
});

module.exports = Icon;
