import React from 'react';
import PropTypes from 'prop-types';

import Grid from '../../components/Grid';
import CardSection from '../../components/CardSection';
import Slider from '../../components/Slider';
import Tabs from '../../components/Tabs';
import P from '../../components/P';
import H1 from '../../components/H1';
import H3 from '../../components/H3';
import Img from '../../components/Img';

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

  return (
    <div>
      <div className="intro-wrapper2">
        <div className="img-wrapper">
            <Img
                src={`${process.env.REACT_APP_BACKEND_URL}${cover[0].url}`}
              />
        </div>

        <div className="parr-wrapper">
            <H3>{ modeloext }</H3>
            <H1>{ titulo }</H1>
            <P>{ description }</P>
        </div>
      </div>

      <div className="slider-wrapper2">

      </div>




      <div className="intro-wrapper">
        <Grid>
          <li className="column">
            <CardSection
              restaurant={{ ...restaurant }}
              hasLink
              history={history}
            />
          </li>
        </Grid>
      </div>

      <div className="slider-wrapper">
        <Slider slides={cover} />
      </div>

      <div className="info-wrapper">
          <div className="infocol-texleft">
              <H3>{ titulo20px }</H3>
              <P>{ description }</P>
              <Img
                src={`${process.env.REACT_APP_BACKEND_URL}${autoabajo.url}`}
               />
          </div>
          <div className="infocol-texright">
              <H3>{ titulo20px }</H3>
              <P>{ description }</P>
              <Img
                src={`${process.env.REACT_APP_BACKEND_URL}${autoabajo2.url}`}
               />
          </div>
      </div>
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
