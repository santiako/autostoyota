/**
 *
 * StyledCardSection
 *
 */

import styled from 'styled-components';

import sizes from '../../assets/styles/sizes';
import colors from '../../assets/styles/colors';
import fonts from '../../assets/styles/fonts';

const StyledCardSection = styled.div`
  display: table;
  width: 100%;
  p {
    ${fonts.reg}
    font-size: 12px;
    color: ${colors.darkGrey};
    line-height: 10px;
    margin-top: ${sizes.margin * 0.4}px;
    &.description {
      line-height: 1.33;
      margin-top: ${sizes.margin * 0.6}px;
    }
  }
  .link p {
    margin-top: ${sizes.margin * 0.3}px;
  }
  .left-infos {
    display: block;
    text-align: center;
  }
  .description {
    text-transform: capitalize;
  }
`;

export default StyledCardSection;
