/**
 *
 * P
 *
 */

import styled from 'styled-components';

import fonts from '../../assets/styles/fonts';
import colors from '../../assets/styles/colors';
import sizes from '../../assets/styles/sizes';

const P = styled.p`
  ${fonts.reg}
  font-size: ${props => props.card ? '14px!important' : '16px!important'};
  color: ${props => props.inputColor || colors.black};
  line-height: 1.69;
  @media (min-width: ${sizes.tablet}) {
    font-size: ${props => props.card ? '14px!important' : '16px!important'};
  }
`;

export default P;
