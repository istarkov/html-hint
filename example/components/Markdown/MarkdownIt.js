import React from 'react';
import compose from 'recompose/compose';
import defaultProps from 'recompose/defaultProps';
import mapPropsOnChange from 'recompose/mapPropsOnChange';
import mapProps from 'recompose/mapProps';
import pure from 'recompose/pure';
import parsemd from './utils/parsemd';
import MarkdownPart from './MarkdownPart';

export const markdownIt = ({ mdAndComps, wrap }) => (
  <div>
    {
      mdAndComps
      .map(({ md, component, componentKey }) => ([
        md && <MarkdownPart>{md}</MarkdownPart>,
        wrap({ component, componentKey }),
      ]))
    }
  </div>
);

export const markdownItHOC = compose(
  defaultProps({
    anchorOffset: -90,
    componentRe: /---:(\w+)/i,
  }),
  mapPropsOnChange(
    ['anchorOffset'],
    ({ anchorOffset }) => ({
      wrap: ({ component, componentKey }) => (
        [
          <a
            style={{
              display: 'block',
              position: 'relative',
              top: anchorOffset,
              visibility: 'hidden',
            }}
            name={componentKey}
          />,
          component,
        ]
      ),
    })
  ),
  mapPropsOnChange(
    ['children'],
    ({ children, componentRe }) => ({
      mdAndCompKeys: parsemd(componentRe, children),
    })
  ),
  pure,
  mapProps(({ ...props, mdAndCompKeys }) => ({
    ...props,
    mdAndComps: mdAndCompKeys
      .map(({ md, componentKey }) => ({
        md,
        componentKey,
        component: props[componentKey],
      })),
  }))
);

export default markdownItHOC(markdownIt);
