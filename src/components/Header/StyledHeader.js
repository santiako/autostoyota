/**
 *
 * StyledHeader
 *
 */

import styled from 'styled-components';

import colors from '../../assets/styles/colors';
import sizes from '../../assets/styles/sizes';
import fonts from '../../assets/styles/fonts';

const StyledHeader = styled.div`
  .navbar {
    position: relative;
    height: ${sizes.header.height.small};
    padding: 0 ${sizes.header.padding};
    background-color: white;
  }

  // Animated hamburger icon
  .navbar-toggler {
    position: absolute;
    top: ${sizes.header.padding};
    right: 0;
    padding: 0 ${sizes.header.padding};
    border: 0;
    .nav-cerrar {
        display: none;

    }
    .nav-icon {
      position: relative;
      width: 20px;
      height: 13px;
      transform: rotate(0deg);
      transition: 0.15s ease-in-out;
      cursor: pointer;
    }
    .nav-icon span {
      position: absolute;
      right: 0;
      display: block;
      width: 100%;
      height: 1px;
      background: ${colors.darkBlue};
      border-radius: 100px;
      opacity: 1;
      transform: rotate(0deg);
      transition: 0.15s ease-in-out;
    }
    .nav-icon span:nth-child(1) {
      top: 0px;
    }
    .nav-icon span:nth-child(2),
    .nav-icon span:nth-child(3) {
      top: 7px;
    }
    .nav-icon span:nth-child(4) {
      top: 14px;
    }
  }

  // Mobile
  .navbar-collapse {
    position: absolute;
    top: ${sizes.header.height.small};
    right: 0;
    z-index: 99;
    width: 365px;
    //padding: 0 0 20px 0;
    background-color: white;
    li {
      a {
        padding: 7px 45px 7px 0;
        &.bortop {
            padding: 27px 45px 7px 0;
            //border-bottom: 1px solid ${colors.lightGrey};
        }
        &.borbot {
            padding: 7px 25px 27px 0;
            margin: 0 20px;
            border-bottom: 1px solid ${colors.backMenu};
        }
        &.bot {
            padding: 7px 45px 27px 0;
            //border-bottom: 1px solid ${colors.backMenu};
        }
        &.back {
            background-color: ${colors.backMenu};
        }
        &.ulti {
            padding: 7px 45px 40px 0;
        }

        ${fonts.reg};
        font-size: 20px;
        font-weight: normal;
        line-height: normal;
        letter-spacing: -0.1px;
        text-align: right;
        color: black;

        &.active,
        &:hover {
          span {
            color: ${colors.redtext};
            //${fonts.bold};
          }
        }
      }
      &:last-of-type {
        a {
          border-bottom: 0;
        }
      }
    }
  }


  .navbar-collapse.show + button {
    p.nav-cerrar {
        font-size: 14px;
        font-family: Montserrat;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        color: #000000;
    }
    .nav-cerrar {
        display: block;
        margin: -15px 20px 0 -55px;
    }
    .nav-icon span:nth-child(1) {
      top: 18px;
      width: 0%;
      left: 50%;
    }
    .nav-icon span:nth-child(2) {
      transform: rotate(45deg);
    }
    .nav-icon span:nth-child(3) {
      transform: rotate(-45deg);
    }
    .nav-icon span:nth-child(4) {
      top: 18px;
      width: 0%;
      left: 50%;
    }
  }



  // Tablet
  @media (min-width: ${sizes.tablet}) {
    .navbar {
      height: ${sizes.header.height.large};
      .container,
      .collapse,
      ul {
        height: 100%;
      }
    }
    .navbar-brand,
    .navbar-collapse {
      display: inline-block;
      vertical-align: top;
    }
    .navbar-brand {
      margin-right: ${sizes.margin * 4}px;
      img {
        width: 50px;
      }
    }
    .navbar-collapse {
      position: relative;
      top: inherit;
      left: inherit;
      width: inherit;
      padding: 0;
      border-left: 1px solid ${colors.greyBorder};
      li {
        display: table-cell;
        padding: 0 ${sizes.margin * 6}px;
        a {
          position: relative;
          display: flex;
          height: 100%;
          color: ${colors.blacknav};

          span {
            margin: auto;
            line-height: 17px;
            color: ${colors.blacknav};
            ${fonts.bold};
            ::after {
              display: block;
              content: attr(title);
              height: 0;
              overflow: hidden;
              visibility: hidden;
              font-weight: bold;
            }
          }
          &:after {
            content: ' ';
            position: absolute;
            bottom: 0;
            left: 0;
            display: block;
            width: 100%;
            border: 2px solid transparent;
          }

          &.active,
          &:hover {
            &:after {
              border-color: ${colors.red};
            }
          }
        }
        a,
        &:last-of-type a {
          border-bottom: 0;
        }
      }
    }

    // Escritorio
    @media (min-width: ${sizes.desktop}) {
      .navbar-brand {
        margin-right: ${sizes.margin * 11.5}px;
      }

      .navbar-collapse {
        li {
            padding: 0 ${sizes.margin * 10}px;
          a {

            &.active,
            &:hover {
              span {
                color: ${colors.redtext};
                ${fonts.bold};
              }
            }
          }
          &:last-of-type {
            a {

            }
          }
        }
      }
    }
  }
`;

export default StyledHeader;
