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

  .rectangle-blk {
    height: 50px;
    background-color: black;
  }

  .container {
    margin: 0;
    padding: 0;
  }

  @media (min-width: ${sizes.mobile}) {
    .container {
        max-width: 100%;
    }
  }

  @media (min-width: ${sizes.tablet}) {
    padding: 0;
    .container {
        max-width: 100%;
    }
  }

  @media (min-width: ${sizes.desktop}) {
      .container {
        max-width: 100%;
      }
  }
`;

export default StyledFooter;
