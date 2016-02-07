import React, { Children } from 'react';
import compose from 'recompose/compose';
import defaultProps from 'recompose/defaultProps';
import Markdown from './Markdown';

export const markdownIt = ({ children }) => (
  <div>
    {
      Children.map(children, (child) => (
        typeof(child) === 'string'
          ? <Markdown>
              {child}
            </Markdown>
          : child
      ))
    }
  </div>
);

export const markdownItHOC = compose(
  defaultProps({})
);

export default markdownItHOC(markdownIt);
