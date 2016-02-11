import React from 'react';
import compose from 'recompose/compose';
import defaultProps from 'recompose/defaultProps';
import Tooltip from './Tooltip.js';
import tooltipExamplesStyles from './TooltipExamples.sass';

export const tooltipExamples = ({ paragraphs, styles, always, hoverable, hidden }) => (
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

export const tooltipExamplesHOC = compose(
  defaultProps({
    styles: tooltipExamplesStyles,
  })
);

export default tooltipExamplesHOC(tooltipExamples);
