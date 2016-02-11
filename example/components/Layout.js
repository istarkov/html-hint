import React from 'react';
import compose from 'recompose/compose';
import defaultProps from 'recompose/defaultProps';
import layoutStyles from './Layout.sass';

// for hmr to work I need the first class to extend Component
export const layoutComp = ({
  styles: { layout, header, main, footer, logo },
  children,
}) => (
  <div className={layout}>
    <header className={header}>
      <h4>
        HTML HINT
      </h4>
      <div>
        <a href="https://github.com/istarkov/html-hint">
          github.com
        </a>
      </div>
    </header>
    <main className={main}>
      {children}
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

export const layoutHOC = compose(
  defaultProps({
    styles: layoutStyles,
  })
);

export default layoutHOC(layoutComp);
