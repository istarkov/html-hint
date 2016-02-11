import React from 'react';
import compose from 'recompose/compose';
import defaultProps from 'recompose/defaultProps';
import Markdown from './Markdown';
import TooltipsExamples from './Tooltip/TooltipsExamples';
import pageStyles from './Page.sass';
import mdContent from './README.md';

export const page = ({ styles, paragraphs, content }) => (
  <div className={styles.main}>
    <Markdown
      exampleMain={
        <TooltipsExamples {...{ paragraphs, styles, always: false, hoverable: false }} />
      }
      exampleHoverable={
        <TooltipsExamples {...{ paragraphs, styles, always: false, hoverable: true }} />
      }
      exampleAlways={
        <div className={styles.bigMargin}>
          {
            <TooltipsExamples {...{ paragraphs, styles, always: true, hoverable: false }} />
          }
        </div>
      }
    >
      {content}
    </Markdown>
  </div>
);

export const pageHOC = compose(
  defaultProps({
    styles: pageStyles,
    content: mdContent,
    paragraphs: [
      {
        tooltips: [
          { position: 'top-left', type: 'warning' },
          { position: 'top', type: 'error' },
          { position: 'top-right', type: 'info' },
        ],
      },
      {
        tooltips: [
          { position: 'left', type: 'info' },
          { position: 'right', type: 'success' },
        ],
      },
      {
        tooltips: [
          { position: 'bottom-left', type: 'warning' },
          { position: 'bottom', type: 'error' },
          { position: 'bottom-right', type: 'info' },
        ],
      },
    ],
  }),
);

export default pageHOC(page);
