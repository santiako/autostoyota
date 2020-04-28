/**
 *
 * H1
 *
 */

import styled from 'styled-components';

import fonts from '../../assets/styles/fonts';
import colors from '../../assets/styles/colors';
import sizes from '../../assets/styles/sizes';

const H1 = styled.h1`
  ${fonts.bold}
  font-size: 32px;
  color: ${colors.black};
  line-height: normal;
  @media (min-width: ${sizes.tablet}) {
    font-size: 50px;
  }
`;

export default H1;
