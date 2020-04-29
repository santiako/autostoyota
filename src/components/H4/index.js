/**
 *
 * H4
 *
 */

import styled from 'styled-components';
import colors from '../../assets/styles/colors';
import fonts from '../../assets/styles/fonts';

const H4 = styled.h4`
  ${fonts.bold}
  font-size: 28px;
  color: ${props => props.inputColor || colors.black};
`;

export default H4;
