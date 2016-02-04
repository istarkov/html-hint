import React from 'react';
import compose from 'recompose/compose';
import defaultProps from 'recompose/defaultProps';
import tooltipStyles from './Tooltip.sass';

export const tooltip = ({ styles }) => (
  <span
    className={styles.main}
  >
    hehehehehehhehe
    <div className={styles.tooltip}>
      <h4>world</h4>
      <div>hello</div>
    </div>
  </span>
);

export const tooltipHOC = compose(
  defaultProps({
    styles: tooltipStyles,
  })
);

export default tooltipHOC(tooltip);
