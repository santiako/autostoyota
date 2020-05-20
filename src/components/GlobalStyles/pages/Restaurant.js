import { createGlobalStyle } from 'styled-components';

import sizes from '../../../assets/styles/sizes';
import colors from '../../../assets/styles/colors';

const Restaurant = createGlobalStyle`
  #restaurant-page {
    .intro-wrapper {
      z-index: 1;
      width: 100%;
      padding: calc(${sizes.slider.height.small} - ${sizes.margin * 2.4}px) ${sizes.margin * 7}px 0 ${sizes.margin * 2}px;
      position: relative;
      ul {
        padding: ${sizes.margin * 0.7}px ${sizes.margin * 1.2}px ${sizes.margin * 0.6}px ${sizes.margin * 1.2}px;
        background-color: white;
        li.column:nth-child(3n + 1) {
          padding-left: inherit;
        }
      }
    }
    .cabecera-row {
        margin: 40px auto 38px auto;
    }

    .slider-row {
        margin-right: -328px;
        margin-left: -328px;
    }
    .imgleft {
        margin: 0;
        padding: 0;
        max-width: 750px;
        .img-wrapper {
            img {
                -webkit-transform: scaleX(-1);
                transform: scaleX(-1);
            }
        }
    }
    .parrleft {
        margin: 42px auto 0 0;
        padding: 0;
        max-width: 480px;
        min-width: none;

        .parr-wrapper {
            H1 {
              font-size: 35px;
              font-weight: 600;
              line-height: 1.26;
              letter-spacing: -0.7px;
              color: #191919;

              margin-top: 11px;
              font-stretch: normal;
              font-style: normal;
            }
            H3 {
              font-size: 20px;
              font-weight: 600;
              font-stretch: normal;
              font-style: normal;
              line-height: 1.35;
              letter-spacing: normal;
            }
            P {
              margin-top: 19px;
              max-width: 400px;
              font-weight: normal;
              font-stretch: normal;
              font-style: normal;
              line-height: 1.69;
              letter-spacing: -0.1px;
            }
        }
    }
    .slider-wrapper {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 0;
      width: 100%;
    }

    .intro-wrapper, .slider-wrapper {
      // Bootstrap custom
      @media (min-width: ${sizes.tablet}) {
        max-width: 720px;
        margin: 0 auto;
      }
      @media (min-width: 992px) {
        max-width: 960px;
      }
      @media (min-width: 1200px) {
        max-width: 1140px;
      }
      @media (min-width: 1280px) {
        max-width: 1240px;
      }
    }
    .slider-wrapper2 {
        width: 100%;
        height: 452px;
        background-color: ${colors.greySlider};
    }
    .info-wrapper {
        margin: 40px 0 79px 0;
        .infocol-texleft, .infocol-texright {
            .parr-wrapper {
                H3 {
                  margin-top: 21px;
                  font-stretch: normal;
                  font-style: normal;
                  line-height: 1.35;
                  letter-spacing: -0.4px;
                  font-size: 20px;
                  line-height: 1.35;
                  letter-spacing: -0.4px;
                }
                p {
                    margin-top: 20px;
                }
            }
        }

        .infocol-texleft {
            margin-bottom: 39px;
            .parr1 {
                order: 2;
            }
            .img1 {
                order: 1;
                .img-wrapper {
                    margin: 0;
                }
            }
            .parr-wrapper {
                max-width: 620px;
            }
            .img-wrapper {
                max-width: 530px;
                min-width: 250px;
                margin: 0 145px 0 auto;
            }
        }

        .infocol-texright {
            .img-wrapper {
                max-width: 530px;
                min-width: 250px;
                margin: 0;
            }
            .parr-wrapper {
                max-width: 620px;
            }
        }
    }
    .informations-wrapper {
      padding: ${sizes.margin * 2.1}px ${sizes.margin * 2}px;
      overflow: hidden;
      background-color: ${colors.greyBkdg};
      h1 {
        padding: 0 0 ${sizes.margin * 1.4}px 0;
      }
    }


    // A partir del ancho mobile
    @media (min-width: ${sizes.mobile}) {
        .cabecera-row {
            margin: 40px auto 60px auto;
        }
        .imgleft {
            min-width: none;
        }
        .infocol-texleft {
            margin-bottom: 39px;
            .parr1 {
                .parr-wrapper {
                    min-width: 250px;
                }
            }
        }
        .infocol-texright {
            .parr2 {
                .parr-wrapper {
                    min-width: 250px;
                }
            }
        }
        .parrleft {
            .parr-wrapper P {
                max-width: none;
            }
            max-width: none;
        }
        .slider-row {
            margin-right: -190px;
            margin-left: -190px;
        }
        .carr-wrapper {
          .col-wrapper {
              min-width: 207px;
          }
        }
        .slider-wrapper2 {
            width: 100%;
            height: 410px;
            background-color: ${colors.greySlider};
        }
        .imgleft {
            margin: auto;
            padding: 0;
            max-width: 680px;
        }
    }

    @media (min-width: 550px) {
      .parrleft {
        margin: 30px auto 0 0;
      }
    }

    // A partir del ancho tablet
    @media (min-width: ${sizes.tablet}) {
      .cabecera-row {
          margin: 40px auto 80px auto;
      }
      .imgleft {
          min-width: 730px;
      }
      .parrleft {
          margin: 30px auto 0 auto;
          padding: 0;
          max-width: 480px;
          min-width: 600px;
          .parr-wrapper {
            h3 {
                font-size: 20px;
                font-weight: 600;
                font-stretch: normal;
                font-style: normal;
                line-height: 1.35;
                letter-spacing: normal;
            }
            h1 {
                font-size: 50px;
                font-weight: 600;
                font-stretch: normal;
                font-style: normal;
                line-height: 1.14;
                letter-spacing: -1px;
                color: #373737;
            }
            P {
                margin-top: 37px;
                max-width: none;
                font-family: Montserrat;
                font-size: 16px;
                font-weight: normal;
                font-stretch: normal;
                font-style: normal;
                line-height: 1.69;
                letter-spacing: -0.1px;
                color: #373737;
            }
          }
      }
      .info-wrapper {
          margin: 40px 0 117px 0;
          .infocol-texleft {
              margin-bottom: 55px;
              .parr1 {
                  order: 2;
              }
              .img1 {
                  order: 1;
                  .img-wrapper {
                    margin: auto;
                    max-width: 530px;
                    min-width: 550px;
                  }
              }
              .parr-wrapper {
                margin: 42px auto 0 auto;
                padding: 0;
                max-width: 480px;
                min-width: 600px;
              }
          }
          .infocol-texright {
              .img-wrapper {
                margin: auto;
                max-width: 530px;
                min-width: 550px;
              }
              .parr-wrapper {
                margin: 42px auto 0 auto;
                padding: 0;
                max-width: 480px;
                min-width: 600px;
              }
          }
      }
      .intro-wrapper {
        padding: ${sizes.margin * 5.8}px 0 0 0;
        ul {
          padding: 0;
        }
      }
      .slider-wrapper {
        position: relative;
        margin-top: ${sizes.margin * 0.3}px;
      }
      .slider-wrapper2 {
          height: 410px;
      }
      .informations-wrapper {
        padding: ${sizes.margin * 10}px 0 ${sizes.margin * 0.3}px 0;
        h1 {
          padding: ${sizes.margin * 2}px 0 ${sizes.margin * 2.8}px calc(40% + ${sizes.margin * 3}px);
        }
        li.column {
          @media (min-width: ${sizes.desktop}) {
            :nth-child(3n + 1) {
              padding-left: 0;
              padding-right: calc(${sizes.margin * 3.2}px/3*2);
            }
            :nth-child(3n + 2) {
              padding-left: calc(${sizes.margin * 3.2}px/3);
              padding-right: calc(${sizes.margin * 3.2}px/3);
            }
            :nth-child(3n + 3) {
              padding-left: calc(${sizes.margin * 3.2}px/3*2);
              padding-right: 0;
            }
            :nth-child(4n + 4) {
              padding-left: calc(${sizes.margin * 3.2}px/3*2);
              padding-right: 0;
            }
          }
        }
      }
    }

    // Breakpoint 1
    @media (min-width: 950px) {
      .imgleft {
          min-width: 730px;
      }
      .info-wrapper {
          .infocol-texleft {
              .parr-wrapper {
                padding: 0;
                margin: 30px auto 0 auto;
                max-width: 600px;
                min-width: 500px;
              }
          }
          .infocol-texright {
              .img-wrapper {
                margin: auto;
                max-width: 530px;
                min-width: 550px;
              }
              .parr-wrapper {
                padding: 0;
                margin: 30px auto 0 auto;
                max-width: 600px;
                min-width: 500px;
              }
          }
      }
    }

    // Breakpoint 2
    @media (min-width: 1125px) {
      .imgleft {
          min-width: 750px;
          margin: 0 auto 0 auto;
      }
      .parrleft {
          margin: 30px auto 0 auto;
          padding: 0;
          max-width: 570px;
          min-width: 530px;
      }
      .info-wrapper {
          .infocol-texleft {
              .parr1 {
                  order: 1;
              }
              .img1 {
                  order: 2;
                  .img-wrapper {
                    margin: 0 auto 0 -9px;
                    max-width: 550px;
                    min-width: 470px;
                  }
              }
              .parr-wrapper {
                // Original
                padding: 0 0 0 150px;
                margin: 70px auto;
                max-width: 552px;
                min-width: 500px;
              }
          }
          .infocol-texright {
              .img-wrapper {
                max-width: 530px;
                min-width: 500px;
                margin: 0 auto 0 145px;
              }
              .parr-wrapper {
                padding: 0 50px;
                margin: 50px auto 0 auto;
                max-width: 500px;
                min-width: 300px;
              }
          }
      }
    }

    // Breakpoint 3 (entre 1221 y 1375px)
    @media (min-width: 1220px) {
      .imgleft {
          min-width: 620px;
      }
    }
    
    // Breakpoint 4
    @media (min-width: 1235px) {
      .parrleft {
        .parr-wrapper {
          P {
            max-width: 400px;
          }
        }
      }
    }

    // Breakpoint 5
    @media (min-width: 1375px) {
      .imgleft {
          min-width: 710px;
          margin: 0 auto 0 60px;
      }
      .parrleft {
          margin: 30px auto 0 auto;
          padding: 0 50px 0 0;
          max-width: 550px;
          min-width: 400px;
      }
    }
  }
`;

export default Restaurant;
