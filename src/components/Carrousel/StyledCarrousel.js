/**
 *
 * StyledCarrousel
 *
 */

import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

import sizes from '../../assets/styles/sizes';
import colors from '../../assets/styles/colors';

const StyledCarrousel = createGlobalStyle`
    .carr-wrapper {
        padding: 43px 0 49px 0;
        .col-wrapper {
            &:first-child,
            &:last-child {
                opacity: 0.3;
            }
        }
    }

    .leftarrow, .rightarrow {
        position: relative;
        width: ${sizes.carrousel.controls.width.large};
        height: ${sizes.carrousel.controls.height.large};
        background-color: rgba(255, 255, 255, 0.56);
        z-index: 1;
        img {
            object-fit: scale-down;
        }
    }
    .leftarrow {
        float: left;
        left: 175px;
        img {
          -ms-transform: rotate(180deg);
          transform: rotate(180deg);
        }
    }
    .rightarrow {
        float: right;
        right: 175px;
    }

    .dots-wrapper {
        width: 95px;
        margin: 20px auto 0 auto;
        Img {
            object-fit: contain;
        }
    }

    @media (max-width: ${sizes.mobile}) {
        .leftarrow, .rightarrow {
            display: none;
        }
    }
`;

export default StyledCarrousel;
