import React from 'react';
import compose from 'recompose/compose';
import defaultProps from 'recompose/defaultProps';
import Markdown from './Markdown';
import TooltipExamples from './Tooltip/TooltipExamples';
import pageStyles from './Page.sass';
import mdContent from './README.md';

export const page = ({ styles, paragraphs, content }) => (
  <div className={styles.main}>
    <Markdown
      exampleMain={
        <TooltipExamples {...{ paragraphs, always: false, hoverable: false }} />
      }
      exampleHoverable={
        <TooltipExamples {...{ paragraphs, always: false, hoverable: true }} />
      }
      exampleAlways={
        <div className={styles.bigMargin}>
          {
            <TooltipExamples {...{ paragraphs, always: true, hoverable: false }} />
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
