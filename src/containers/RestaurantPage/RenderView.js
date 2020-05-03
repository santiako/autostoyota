import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'reactstrap';

import Grid from '../../components/Grid';
import CardSection from '../../components/CardSection';
import Slider from '../../components/Slider';
import Tabs from '../../components/Tabs';
import P from '../../components/P';
import H1 from '../../components/H1';
import H3 from '../../components/H3';
import Img from '../../components/Img';
import Carrousel from '../../components/Carrousel';

const RenderView = ({
  restaurant,
  rest: {
    reviewsConnection: {
      aggregate: { count },
    },
  },
  history,
  match: {
    params: { content, id },
  },
}) => {
  const { cover, modeloext, titulo, description, titulo20px, autoabajo, autoabajo2 } = restaurant;
  const tabs = ['informations', 'reviews'];

  const toggle = tab => {
    if (content !== tab) {
      history.push(`/${id}/${tab}`);
    }
  };

//      <div className="informations-wrapper">
//        <Tabs
//          restaurant={{ ...restaurant, count }}
//          toggleTab={toggle}
//          selected={content}
//          tabs={tabs}
//        />
//      </div>
//    </div>
   // <div className="intro-wrapper2"></div>
//      <div className="slider-wrapper">
//        <Slider slides={cover} />
//      </div>

  return (
    <div>
    <Container fluid={true}>
        <Row style={{ margin: '2em auto 4em auto' }}>
            <Col md="6" className='imgleft'>
                <div className="img-wrapper">
                    <Img
                        src={`${process.env.REACT_APP_BACKEND_URL}${cover[0].url}`}
                      />
                </div>
            </Col>

            <Col md="6" className='parrleft'>
                <div className="parr-wrapper">
                    <H3>{ modeloext }</H3>
                    <H1>{ titulo }</H1>
                    <P>{ description }</P>
                </div>
            </Col>
        </Row>

        <Row>
          <div className="slider-wrapper2">
                <Carrousel restaurant={{ ...restaurant }} />
          </div>
        </Row>



        <div className="info-wrapper">
            <div className="infocol-texleft">
                <Row>
                    <Col>
                        <div className="parr-wrapper">
                            <H3>{ titulo20px }</H3>
                            <P>{ description }</P>
                        </div>
                    </Col>
                    <Col>
                        <div className="img-wrapper">
                            <Img
                            src={`${process.env.REACT_APP_BACKEND_URL}${autoabajo.url}`}
                            />
                        </div>
                    </Col>
                </Row>
            </div>

            <div className="infocol-texright">
                <Row>
                    <Col>
                        <div className="img-wrapper">
                        <Img
                            src={`${process.env.REACT_APP_BACKEND_URL}${autoabajo2.url}`}
                           />
                        </div>
                    </Col>
                    <Col>
                        <div className="parr-wrapper">
                          <H3>{ titulo20px }</H3>
                          <P>{ description }</P>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    </Container>
    </div>
  );
};

RenderView.defaultProps = {
  restaurant: {
    cover: [],
    district: null,
    price: null,
  },
};

RenderView.propTypes = {
  restaurant: PropTypes.shape({
    cover: PropTypes.array,
    district: PropTypes.string,
    price: PropTypes.string,
  }),
  history: PropTypes.object.isRequired,
};

export default RenderView;
