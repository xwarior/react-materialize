import React, { Component, PropTypes } from 'react';
import constants from './constants';
import cx from 'classnames';

class Icon extends Component {
  render () {
    const className = this.props.className;
    var newProps = Object.assign({}, this.props);
    delete newProps.className;

    let classes = {
      'material-icons': true
    };
    constants.PLACEMENTS.forEach(p => {
      classes[p] = this.props[p];
      delete newProps[p];
    });

    constants.ICON_SIZES.forEach(s => {
      classes[s] = this.props[s];
      delete newProps[p];
    });

    return (
      <i className={cx(classes, className)} { ...newProps }>{this.props.children}</i>
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
