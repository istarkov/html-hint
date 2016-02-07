import React from 'react';
import compose from 'recompose/compose';
import defaultProps from 'recompose/defaultProps';
import Tooltip from './Tooltip.js';
import pageStyles from './Page.sass';

import MarkdownIt from './MarkdownIt';

// import ReactMarkdown from 'react-markdown';
// import githubCss from 'github-markdown-css';
import mdContent from './content.md';
import parsemd from './utils/parsemd';

export const page = ({ styles, paragraphs, content }) => (
  <div className={styles.main}>
    <div className={styles.block}>
      <h3>Unhoverable tooltip examples</h3>
      <MarkdownIt>
        {content.main}
        <h1>HELLO</h1>
        {content.code}
      </MarkdownIt>
      {
        paragraphs.map(({ tooltips }, pIndex) => (
          <div key={pIndex} className={styles.paragraph}>
            {
              tooltips.map(({ position, type }, tIndex) => ([
                <Tooltip
                  key={`tooltip_${tIndex}`}
                  position={position}
                  type={type}
                  tooltip={
                    <div className={styles.tooltip}>
                      <h3>Hello World</h3>
                      <div>
                        Tell me what you doing
                      </div>
                      <a href="#">Some Link</a>
                    </div>
                  }
                >
                  <span className={styles.highlite}>{`${position} tooltip`}</span>
                </Tooltip>,
                <span key={`span_${tIndex}`}>
                  &nbsp; -- &nbsp;
                </span>,
              ]))
            }
          </div>
        ))
      }
    </div>
  </div>
);

export const pageHOC = compose(
  defaultProps({
    styles: pageStyles,
    content: parsemd(mdContent),
    paragraphs: [
      {
        tooltips: [
          { position: 'right', type: 'info' },
        ],
      },

      {
        tooltips: [
          { position: 'top-right', type: 'info' },
          { position: 'top', type: 'error' },
          { position: 'top-left', type: 'warning' },
        ],
      },
      {
        tooltips: [
          { position: 'bottom-right', type: 'success' },
          { position: 'bottom', type: 'error' },
          { position: 'bottom-left', type: 'warning' },
        ],
      },

    ],
  }),
);

export default pageHOC(page);
