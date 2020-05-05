/**
 *
 * StyledMenu
 *
 */

import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

import sizes from '../../assets/styles/sizes';
import colors from '../../assets/styles/colors';

const StyledMenu = createGlobalStyle`
    .carr-wrapper {
        padding: 43px 0 49px 0;
    }
    .dots-wrapper {
        width: 95px;
        margin: 20px auto 0 auto;
        Img {
            object-fit: contain;
        }
    }
`;

export default StyledMenu;
