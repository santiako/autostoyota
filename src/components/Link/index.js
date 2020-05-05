/**
 *
 * Nav
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import StyledLink from './StyledLink';

function Link({ active, children, url, clase }) {

    var test = active && 'active' + ' ' + (clase !=null) ? clase : null;
    //alert(test);
  return (
    <StyledLink className={test} to={url}>
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
