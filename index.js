var React = require('react');

var _classPrefix = 'fa';

var Icon = React.createClass({
    displayName: 'Icon',
    propTypes: {
        glyph: React.PropTypes.string,
        classPrefix: React.PropTypes.string
    },
    getDefaultProps: function() {
        return {
            classPrefix: _classPrefix
        };
    },
    render: function () {
        var prefix = this.props.classPrefix;
        var className = prefix + ' ' + prefix + '-' + this.props.glyph;

        this.props.className = this.props.className ? this.props.className + ' ' + className : className;

        return React.createElement('span', this.props);
    }
});

module.exports = Icon;

module.exports.setDefaultClassPrefix = function (classPrefix) {
    _classPrefix = classPrefix;
};
