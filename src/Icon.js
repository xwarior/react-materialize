import React, { Component, PropTypes } from 'react';
import constants from './constants';
import cx from 'classnames';

class Icon extends Component {
  render () {
    var {
      className,
        ...newProps
    } = this.props;

    let classes = {
      'material-icons': true
    };
    constants.PLACEMENTS.forEach(p => {
      classes[p] = this.props[p];
      delete newProps[p];
    });

    constants.ICON_SIZES.forEach(s => {
      classes[s] = this.props[s];
      delete newProps[s];
    });

    return (
      <i className={cx(classes, className)} {...newProps}>{this.props.children}</i>
    );
  }
}

Icon.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  tiny: PropTypes.bool,
  small: PropTypes.bool,
  medium: PropTypes.bool,
  large: PropTypes.bool
};

export default Icon;
