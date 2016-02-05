import React from 'react';
import cx from 'classnames';
import compose from 'recompose/compose';
import defaultProps from 'recompose/defaultProps';
import mapPropsOnChange from 'recompose/mapPropsOnChange';
import tooltipStyles from './Tooltip.sass';

export const tooltip = ({ styles }) => (
  <span
    className={styles.main}
  >
    hh
    <div className={styles.tooltip}>
      <h4>worldsadasdasdasa</h4>
      <div>hello</div>
    </div>
  </span>
);

export const tooltipHOC = compose(
  defaultProps({
    styles: tooltipStyles,
    // top, top-left, top-right, bottom, bottom-left, bottom-right
    position: 'top',
    type: 'info', // error,
    always: false,
  }),
  mapPropsOnChange(
    ['position', 'type', 'always', 'styles'],
    ({ position, type, always, styles }) => ({
      styles: {
        ...styles,
        main: cx({
          [styles.main]: true,
          [styles[`hint--${type}`]]: true,
          [styles[`hint--${position}`]]: true,
          [styles[`hint--${always}`]]: always,
        }),
      },
    })
  )
);

export default tooltipHOC(tooltip);
