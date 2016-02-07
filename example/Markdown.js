import React from 'react';
import compose from 'recompose/compose';
import defaultProps from 'recompose/defaultProps';
import mapPropsOnChange from 'recompose/mapPropsOnChange';
import githubCss from 'github-markdown-css';
import markdown from './utils/markdown';

console.log('ddd', githubCss['markdown-body']);

export const markdownComp = ({ html }) => (
  <div
    className={githubCss['markdown-body']}
    dangerouslySetInnerHTML={{ __html: html }}
  />
);

export const markdownHOC = compose(
  defaultProps({
    gitStyles: githubCss,
  }),
  mapPropsOnChange(
    ['children'],
    ({ children }) => ({
      html: markdown(children),
    })
  )
);

export default markdownHOC(markdownComp);
