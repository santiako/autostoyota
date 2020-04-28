/**
 *
 * Footer
 *
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Nav } from 'reactstrap';
import { Link } from 'react-router-dom';

import Input from '../Input';
import Img from '../Img';
import arrow from '../../assets/img/icon_arrow_right.png';

import StyledFooter from './StyledFooter';

function Footer({ links, onSubmit }) {
  const [email, setValue] = useState('');

  return (
    <StyledFooter>
        <div className="container">
            <div className="rectangle-blk">
            </div>
        </div>
    </StyledFooter>
  );
}

Footer.defaultProps = {
  links: [],
  onSubmit: e => e.preventDefault()
};
Footer.propTypes = {
  links: PropTypes.array,
  onSubmit: PropTypes.func
};

export default Footer;
