import React, { Component } from 'react';
import compose from 'recompose/compose';
import defaultProps from 'recompose/defaultProps';
import layoutStyles from './Layout.sass';
import Page from './Page.js';

// for hmr to work I need the first class to extend Component
export class Layout extends Component {
  render() {
    const { styles: { layout, header, main, footer, logo } } = this.props;
    return (
      <div className={layout}>
        <header className={header}>
          <div>
            React tooltips made easy
          </div>
          <div>
            <a href="https://github.com/istarkov/html-hint">
              Star at github.com
            </a>
          </div>
        </header>
        <main className={main}>
          <Page />
        </main>
        <footer className={footer}>
          <div>
            <a href="https://github.com/istarkov">
              Ivan Starkov
            </a>
          </div>
          <div className={logo}></div>
          <div>
            <a href="https://twitter.com/icelabaratory">
              @icelabaratory
            </a>
          </div>
        </footer>
      </div>
    );
  }
}

export const layoutHOC = compose(
  defaultProps({
    styles: layoutStyles,
  })
);

export default layoutHOC(Layout);
