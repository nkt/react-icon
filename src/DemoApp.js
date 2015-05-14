import React from 'react/addons';
import Icon from 'react-icon';

function trim(str) {
  return str.replace(/^\s+|\s+$/g, '');
}

const DemoApp = React.createClass({
  mixins: [React.addons.LinkedStateMixin],
  getInitialState() {
    return {
      glyph: 'github'
    };
  },
  componentDidMount() {
    this.refs.glyphInput.getDOMNode().focus();
  },
  onGlyphChange(e) {
    this.setState({
      glyph: trim(e.target.innerText)
    });
  },
  onGlyphBlur(e) {
    if (!e.target.innerText) {
      this.setState(this.getInitialState());
    }
  },
  render() {
    return (
      <div className="demo-container">
        <div>
          <code className="comment">{'//  enter your favorite icon'}</code>
        </div>
        <code>{'<'}</code>
        <code className="tag">{'Icon'}</code>
        <code>{' '}</code>
        <code className="attr">{'glyph'}</code>
        <code>{'="'}</code>
        <code
          className="string"
          ref="glyphInput"
          onInput={this.onGlyphChange}
          onBlur={this.onGlyphBlur}
          dangerouslySetInnerHTML={{__html: this.state.glyph}}
          contentEditable
        />
        <code>{'" />'}</code>
        <div className="icon-container">
          <Icon glyph={this.state.glyph} />
        </div>
      </div>
    );
  }
});

export default DemoApp;
