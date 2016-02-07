import React from 'react';
import compose from 'recompose/compose';
import defaultProps from 'recompose/defaultProps';
import Tooltip from './Tooltip.js';
import pageStyles from './Page.sass';

import MarkdownIt from './MarkdownIt';
import mdContent from './content.md';
import parsemd from './utils/parsemd';

const renderTooltipExample = ({ paragraphs, styles, always, hoverable, hidden }) => (
  <div className={styles.exampleBlock}>
    <div className={styles.example}>
      {
        paragraphs.map(({ tooltips }, pIndex) => (
          <div key={pIndex} className={styles.paragraph}>
            {
              tooltips.map(({ position, type }, tIndex) => (
                <Tooltip
                  key={`tooltip_${tIndex}`}
                  position={position}
                  type={type}
                  always={always}
                  hidden={hidden}
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
);

export const page = ({ styles, paragraphs, content }) => (
  <div className={styles.main}>

    <MarkdownIt>
      {content.part0}
      {renderTooltipExample({ paragraphs, styles, always: false, hoverable: false })}
      {content.part1}
      {renderTooltipExample({ paragraphs, styles, always: false, hoverable: false })}
      {content.part2}
      {renderTooltipExample({ paragraphs, styles, always: false, hoverable: true })}
      {content.part3}
      <div className={styles.bigMargin}>
        {renderTooltipExample({ paragraphs, styles, always: true, hoverable: false })}
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
