import React from 'react';
import Tooltip from './Tooltip.js';

export default ({ paragraphs, styles, always, hoverable, hidden }) => (
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
