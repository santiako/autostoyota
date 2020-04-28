/**
 *
 * StyledFooter
 *
 */

import styled from 'styled-components';

import colors from '../../assets/styles/colors';
import sizes from '../../assets/styles/sizes';
import fonts from '../../assets/styles/fonts';

const StyledFooter = styled.div`

  //background-color: black;

  .rectangle-blk {
    height: 50px;
    background-color: black;
  }

  @media (min-width: ${sizes.tablet}) {
    padding: 0 20px;

  }

  @media (min-width: ${sizes.desktop}) {

  }
`;

export default StyledFooter;
