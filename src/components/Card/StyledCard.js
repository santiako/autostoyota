/**
 *
 * StyledCard
 *
 */

import styled from 'styled-components';

import sizes from '../../assets/styles/sizes';
import colors from '../../assets/styles/colors';

const StyledCard = styled.div`
  margin-bottom: 34px;
  &.clickable-card {
    cursor: pointer;
  }
  .img-wrapper {
    width: 100%;
    height: ${sizes.article.img.height};
    //background: none;
  }
  .btn-wrapper {
    display: none;
    margin: auto;
    width: 152px;
    height: 34px;
    background-color: black;
    border-radius: 20px;
    p {
        padding: 5px;
        font-size: 13px;
        font-weight: 600;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.77;
        letter-spacing: 0.07px;
        text-align: center;
        color: white;
    }
  }
  &:hover {
    margin-bottom: 0;
    h4 {
        color: #eb0a1e;
    }
    .btn-wrapper {
        display: block;
    }
  }


    @media (max-width: 1200px) {
        .img-wrapper {
            height: 115px;
        }
    }
    @media (max-width: 1023px) {
        .img-wrapper {
            height: 160px;
            img {
                object-fit: contain;
            }
        }
    }
    @media (max-width: ${sizes.tablet}) {
        .img-wrapper {
            height: 230px;
            img {
                object-fit: cover;
            }
        }
    }
`;

export default StyledCard;
