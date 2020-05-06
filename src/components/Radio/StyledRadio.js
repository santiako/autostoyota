/**
 *
 * StyledRadio
 *
 */

import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledRadio = styled.input`
  display: none;

//  background-color: red;
//
//  &:hover input ~ .checkmark {
//    background-color: #ccc;
//  }
`;

StyledRadio.defaultProps = {
  type: 'radio'
};

StyledRadio.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string.isRequired
};

export default StyledRadio;
