import { createGlobalStyle } from 'styled-components';

import sizes from '../../assets/styles/sizes';
import colors from '../../assets/styles/colors';
import fonts from '../../assets/styles/fonts';

const StyledFilters = createGlobalStyle`
  .navbar-toggler {
    position: absolute;
    top: 0;
    right: 0;
    padding: 0;
    z-index: 1;
    border: 0;
    .filter-btn {
      ${fonts.reg};
      font-size: 16px;
      color: ${colors.darkGrey};
      img, span {
        vertical-align: middle;
      }
      span {
        line-height: 12px;
      }
      img {
        width: 14px;
        height: auto;
        margin-right: ${sizes.margin}px;
        margin-top: ${sizes.margin * 0.4}px;
      }
    }
  }

  .filteradio {
    //display: none;
  }

  .filteradio {
    position: inherit;
    top: 0;
    left: 0;
    width: 100%;
    background: white;
    z-index: 1;

    //.filters-wrapper {
      padding: 0!important;
      ul {
        overflow-y: scroll;
        position: relative;
        margin: -29px 0 0 100px;
        z-index: 1;

        &::-webkit-scrollbar-track {
          border-radius: 10px;
          position: absolute;
          top: 0;
          right: 0;
          width: 6px;
          height: 6px;
        }
        &::-webkit-scrollbar {
          width: 6px;
          height: 6px;
          border-radius: 10px;
        }
        &::-webkit-scrollbar-thumb {
          border-radius: 10px;
          width: 6px;
          height: 6px;
          background-color: ${colors.mediumGrey};
        }
      }
    //}
    h1 {
      padding-bottom: ${sizes.margin * 1.5}px;
    }
    hr {
      margin: ${sizes.margin * 1}px 0 ${sizes.margin * 6}px 0;
      border-color: #d8d8d8;
    }
    p {
      ${fonts.bold};
      //padding-bottom: ${sizes.margin * 1.5}px;
      width: 130px;
      color: ${colors.black};
      font-size: 14px;
      font-stretch: normal;
      font-style: normal;
      line-height: 1;
      letter-spacing: 0.08px;
    }
  }

  // Input Radio
  .radio-custom, .radio-custom-label {
    display: inline-block;
    vertical-align: middle;
    cursor: pointer;
  }
  .radio-custom-label {
    position: relative;
    font-family: 'Montserrat';
    margin-bottom: 0;
    padding-left: ${sizes.margin * 2}px;
    font-size: 14px;
    line-height: normal;
    color: ${colors.black};

    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1;
    letter-spacing: 0.08px;
    text-align: center;
  }

  .radio-custom {
    position: absolute;
    opacity: 0;
  }
  .radio-custom + .radio-custom-label:before {
    content: '';
    position: absolute;
    left: 0;
    bottom: -8px;
    width: calc(100% + 17px);
    height: 31px;
    padding: ${sizes.margin * 0.2}px;
    text-align: center;
    border-radius: 18px;
  }
  .radio-custom:checked + .radio-custom-label:before,
  .radio-custom:hover + .radio-custom-label:before {
    z-index: -1;
    background: #f7f7f7;
  }


  // Dropdown menu
  .dropdown-toggle {
    ${fonts.bold};
    border: none;
    background: none;
    color: ${colors.black};

    font-size: 14px;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: 1;
    letter-spacing: 0.08px;
    transition: none;

    &:hover, &:focus {
        background: none;
        color: ${colors.black};
        box-shadow: none!important;
    }
  }

   .dropdown {
     float: right;
     position: relative;
     margin: -32px 0 0 0;
     z-index: 2;

     button[type=button][aria-expanded=true] {
        border: none;
        background: none;
        color: ${colors.black};
     }
    }

    .filterdrop {
        &.fleft {
            .dropdown {
                float: left;
            }
        }
    }

  .dropdown-menu {
    box-shadow: 2px 8px 20px 0 rgba(0, 0, 0, 0.15);
    min-width: 12rem;

      .radio-custom-label {
        position: relative;
        width: 100%;
        margin-bottom: 0;
        padding-left: ${sizes.margin * 2}px;
        font-size: 12px;
        line-height: normal;
        color: ${colors.blacknav};
        //text-transform: capitalize;

        font-family: ${fonts.reg};
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 3.5;
        letter-spacing: -0.1px;
        text-align: left;
      }

      .radio-custom + .radio-custom-label:before {
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        padding: ${sizes.margin * 0.2}px;
        text-align: center;
        border-radius: 0;
      }
      .radio-custom:checked + .radio-custom-label:before,
      .radio-custom:hover + .radio-custom-label:before {
        z-index: -1;
        background: #f7f7f7;
      }
      .dropdown-divider {
        margin: 0;
      }
  }

    @media (min-width: 991px) {
        // Si el ancho es > que tablet...
        .fcat {
            display: block;
        }
        .filterdrop.fleft {
            display: none;
        }
    }
    @media (max-width: 991px) {
        // Si el ancho es < que tablet...
        .filteradio.fcat {
            display: none;
        }
        .filterdrop, .filterdrop.fleft {
            display: block;
        }
    }
`;

export default StyledFilters;
