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
    height: ${sizes.header.height.large};
    padding: 0 ${sizes.header.padding};
    background-color: white;
    border-bottom: 1px solid ${colors.greyBorBot};

    .container {
        justify-content: flex-start;
    }
    .container,
    .collapse, ul {
        height: 100%;
        margin: 0;
    }
    .navbar-collapse {
        height: initial;
        width: 100%;
    }
    .navbar-brand {
      margin-left: ${sizes.margin * 1.5}px;
      img {
        width: 40px;
      }
      a {
        padding: 0;
      }
    }
    .staticnav {
        display: none;
    }
  }


  // Animated hamburger icon
  .navbar-toggler {
    position: absolute;
    margin: 0;
    top: 17px;
    right: 4px;
    padding: 11px;
    border: 0;

    p.nav-cerrar {
        display: none;
        position: relative;
        top: -2px;
        right: 46px;
        font-family: ${fonts.reg};
        font-size: 14px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        color: ${colors.blacknav};
    }
    .nav-icon {
      position: relative;
      width: 20px;
      //height: 13px;
      transform: rotate(0deg);
      transition: 0.15s ease-in-out;
      cursor: pointer;
    }
    .nav-icon span {
      position: absolute;
      right: 0;
      display: block;
      width: 100%;
      height: 2px;
      background: ${colors.blacknav};
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
    background-color: white;
    li {
      a {
        padding: 7px 45px 7px 0;
        &.bortop {
            padding: 27px 45px 7px 0;
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


  // Mobile
  @media (min-width: ${sizes.mobile}) {
    .navbar {
        .navbar-brand {
          margin-left: ${sizes.margin * 3.5}px;
        }
        // Desplegable en todos los tamaños
        .navbar-collapse {
            width: 365px;
            .navbar-nav {
                display: none;
                flex-direction: column;
            }
        }
        .navbar-toggler {
            margin: 0;
            top: 27px;
            right: 13px;
            padding: 0;
            p.nav-cerrar {
                display: block;
            }
        }
        .staticnav {
            display: flex;
        }
    }

    .navbar-nav {
        flex-direction: row;
    }

    .navbar-brand,
    .navbar-collapse {
      display: inline-block;
      vertical-align: top;
    }

    .navbar-expand-md .navbar-toggler {
        display: block;
    }

    .navbar-collapse, .navbar-nav {
      position: relative;
      top: inherit;
      left: inherit;
      width: 365px;
      padding: 0;
      //border-left: 1px solid ${colors.greyBorder};

      li {
        display: table-cell;
        padding: 0 30px;
        a {
          //margin: 7px auto;
          padding: 0;
          position: relative;
          display: flex;
          height: 100%;
          color: ${colors.blacknav};

          span {
            margin: auto;
            line-height: 17px;
            color: ${colors.blacknav};
            ${fonts.bold};
            font-size: 14px;
            text-align: center;
            letter-spacing: normal;
            width: 125px;

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
            span {
                color: ${colors.redtext};
            }
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
  .navbar-collapse.show + button {
    .nav-cerrar {
        display: block;
    }
  }
}

  // Tablet
  @media (min-width: ${sizes.tablet}) {
    .navbar {
      //height: ${sizes.header.height.large};
        .navbar-brand {
          margin-left: ${sizes.margin * 3.5}px;
        }
        .staticnav {
            display: flex;
        }
    }
    .navbar-brand,
    .navbar-collapse {
      display: inline-block;
      vertical-align: top;
    }
    .navbar-collapse {
        .navbar-nav {
            display: none;
        }
    }
    .navbar-expand-md .navbar-toggler {
        display: block;
    }

    .navbar-collapse, .navbar-nav {
      position: relative;
      top: inherit;
      left: inherit;
      width: 365px;
      padding: 0;
      //border-left: 1px solid ${colors.greyBorder};

      li {
        display: table-cell;
        padding: 0 30px;
        a {
          //margin: 7px auto;
          padding: 0;
          position: relative;
          display: flex;
          height: 100%;
          color: ${colors.blacknav};

          span {
            margin: auto;
            line-height: 17px;
            color: ${colors.blacknav};
            ${fonts.bold};
            font-size: 14px;
            text-align: center;
            letter-spacing: normal;
            width: 125px;

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
            span {
                color: ${colors.redtext};
            }
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
    }

    // Escritorio
    @media (min-width: ${sizes.desktop}) {
      .navbar-brand {
        margin-right: ${sizes.margin * 6.5}px;
      }

      .navbar-collapse {
        .navbar-nav {
            display: none;
        }
        li {
            padding: 0 30px;
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
`;

export default StyledHeader;
