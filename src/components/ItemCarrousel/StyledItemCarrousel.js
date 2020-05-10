/**
 *
 * StyledItemCarrousel
 *
 */

import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

import colors from '../../assets/styles/colors';
import sizes from '../../assets/styles/sizes';
import fonts from '../../assets/styles/fonts';

const StyledItemCarrousel = createGlobalStyle`
    .col-wrapper {
        max-width: 300px;
        min-width: 250px;
        padding: 0 11px 0 11px;

        H3 {
            margin: 20px 0 0 0;
            letter-spacing: -0.4px;
            line-height: 1.35;
        }
        P {
            margin: 18px 0 0 0;
            letter-spacing: -0.1px;
        }
    }
`;

export default StyledItemCarrousel;
