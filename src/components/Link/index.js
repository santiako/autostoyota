/**
 *
 * Nav
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import StyledLink from './StyledLink';

function Link({ active, children, url, clase }) {

//    const test = (active && 'active') + ' ' + (clase !=null) ? clase : null;

    const test2 = (clase != null) ? clase + ' ' : '' + (active && 'active');

  return (
    <StyledLink className={test2} to={url}>
      {children}
    </StyledLink>
  );
}

Link.defaultProps = {
  active: null,
  children: null,
  url: '#',
  clase: null
};

Link.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  url: PropTypes.string,
  clase: PropTypes.string
};

export default Link;
