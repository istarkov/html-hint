import React from 'react';
import compose from 'recompose/compose';
import defaultProps from 'recompose/defaultProps';
import mapPropsOnChange from 'recompose/mapPropsOnChange';

import githubCss from 'github-markdown-css/github-markdown.css';
import hlJsCss from 'highlight.js/styles/github.css';

import markdown from './utils/markdown';

export const markdownComp = ({ html, styles }) => (
  <div
    className={styles['markdown-body']}
    dangerouslySetInnerHTML={{ __html: html }}
  />
);

const re = /(<.+?class=)"([^"]+)"/gi;

export const markdownHOC = compose(
  defaultProps({
    styles: {
      ...githubCss,
      ...hlJsCss,
    },
  }),
  mapPropsOnChange(
    ['children'],
    ({ children }) => ({
      html: markdown(children),
    })
  ),
  mapPropsOnChange(
    ['html', 'styles'],
    ({ ...props, html, styles }) => ({
      ...props,
      html: html
        .replace(
          re,
          (match, p1, className) => `${p1}"${styles[className] || className}"`
        ),
    })
  )
);

export default markdownHOC(markdownComp);
