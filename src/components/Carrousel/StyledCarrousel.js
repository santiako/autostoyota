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
            //left: 175px;
            left: 0;
            img {
              -ms-transform: rotate(180deg);
              transform: rotate(180deg);
            }
        }
        .rightarrow {
            float: right;
            //right: 175px;
            right: 0;
        }
        .dots-wrapper {
            width: 95px;
            height: 50px;
            margin: 15px auto;
            Img {
                object-fit: contain;
            }
        }
    }

    @media (min-width: ${sizes.mobile}) {
        .carr-wrapper {
            .col-wrapper {
                &:first-child,
                &:last-child {
                    opacity: 0.3;
                }
            }
        }
        .dots-wrapper {
            width: 95px;
            height: 50px;
            margin: 0 auto 0 auto;
        }
    }

    @media (max-width: ${sizes.mobile}) {
        .leftarrow, .rightarrow {
            display: none;
        }
    }
`;

export default StyledCarrousel;
