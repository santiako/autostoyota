/**
 *
 * CardSection
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import {
  restaurantDefaultShape,
  restaurantShape,
} from '../../shapes/restaurant';

import colors from '../../assets/styles/colors';
import H1 from '../H1';
import H4 from '../H4';
import P from '../P';
import Price from '../Price';
import Rate from '../Rate';

import StyledCardSection from './StyledCardSection';

function CardSection({ restaurant, hasLink, history }) {
  const { category, anio, precio, district, id, name, note, price, titulo, phone, website } = restaurant;

  /* istanbul ignore next */
  const goToReviews = () => {
    history.push(`/${id}/reviews`);
    const element = document.getElementById('tab-content');
    element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <StyledCardSection className={hasLink && 'banner'}>
      <div className="left-infos">
        {!hasLink ? <H4 inputColor="black">{name}</H4> : <H1 inputColor="black">{name}</H1>}
        <p className="description">
          {<P card inputColor={colors.blacknav}>{anio}&nbsp;|&nbsp; $&nbsp;{precio}</P>}
        </p>
      </div>

    </StyledCardSection>
  );

//          <div className="right-infos">
//        <Rate value={Math.floor(note)} clickable={false} />
//        {hasLink && (
//          <div className="link-wrapper">
//            <a onClick={goToReviews} className="link" role="navigation">
//              <p>See all reviews</p>
//            </a>
//          </div>
//        )}
//      </div>
}

CardSection.defaultProps = {
  restaurant: restaurantDefaultShape,
  hasLink: false,
};

CardSection.propTypes = {
  restaurant: PropTypes.shape(restaurantShape),
  hasLink: PropTypes.bool,
};

export default CardSection;
