const {assert} = require('chai');
const React = require('react');
const Icon = require('../src/index');

function render(component) {
  return React.renderToStaticMarkup(component);
}

describe('Icon', () => {
  it('should render icon', () => {
    const html = render(<Icon glyph="star" />);
    assert.equal('<span class="fa fa-star"></span>', html);
  });

  it('should add passed className', () => {
    const html = render(<Icon className="star-gold" glyph="star" />);
    assert.equal('<span class="fa fa-star star-gold"></span>', html);
  });

  it('should pass children', () => {
    const html = render(<Icon glyph="star">test</Icon>);
    assert.equal('<span class="fa fa-star">test</span>', html);
  });

  it('should replace font prefix', () => {
    const html = render(<Icon classPrefix="octicons" glyph="star" />)
    assert.equal('<span class="octicons octicons-star"></span>', html);
  });

  it('should replace default font prefix', () => {
    Icon.setDefaultFontPrefix('octicons');
    const html = render(<Icon glyph="star" />);
    assert.equal('<span class="octicons octicons-star"></span>', html);
  });
});
