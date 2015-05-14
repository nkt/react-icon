import React from 'react/addons';
import Icon from 'react-icon';

const DemoApp = React.createClass({
  mixins: [React.addons.LinkedStateMixin],
  getInitialState() {
    return {
      glyph: 'star'
    };
  },
  componentDidMount() {
    this.refs.glyphInput.getDOMNode().focus();
  },
  onGlyphChange(e) {
    this.setState({
      glyph: e.target.innerText
    });
  },
  render() {
    return (
      <main className="demo-container">
        <code>{'<'}</code>
        <code className="tag">{'Icon'}</code>
        <code>{' '}</code>
        <code className="attr">{'glyph'}</code>
        <code>{'="'}</code>
        <code
          ref="glyphInput"
          onInput={this.onGlyphChange}
          dangerouslySetInnerHTML={{__html: this.state.glyph}}
          contentEditable
        />
        <code>{'" />'}</code>
        <div className="icon-container">
          <Icon glyph={this.state.glyph} />
        </div>
      </main>
    );
  }
});

export default DemoApp;
