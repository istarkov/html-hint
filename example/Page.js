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

    <MarkdownIt>
      {content.main}
      <h1>HELLO</h1>
      {content.code}
      <div className={styles.exampleBlock}>
        <div className={styles.example}>
          {
            paragraphs.map(({ tooltips }, pIndex) => (
              <div key={pIndex} className={styles.paragraph}>
                {
                  tooltips.map(({ position, type, always, hoverable }, tIndex) => (
                    <Tooltip
                      key={`tooltip_${tIndex}`}
                      position={position}
                      type={type}
                      always={always}
                      hoverable={hoverable}
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
                      <div className={styles.highlite}>{`${position} tooltip`}</div>
                    </Tooltip>
                  ))
                }
              </div>
            ))
          }
        </div>
      </div>
    </MarkdownIt>
  </div>
);

export const pageHOC = compose(
  defaultProps({
    styles: pageStyles,
    content: parsemd(mdContent),
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
          { position: 'right', type: 'info' },
        ],
      },
      {
        tooltips: [
          { position: 'bottom-left', type: 'warning' },
          { position: 'bottom', type: 'error' },
          { position: 'bottom-right', type: 'success' },
        ],
      },

    ],
  }),
);

export default pageHOC(page);
