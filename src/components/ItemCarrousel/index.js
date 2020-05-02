/**
 *
 * ItemCarrousel
 *
 */

import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';

import StyledItemCarrousel from './StyledItemCarrousel';

/* eslint-disable camelcase */
import Img from '../Img';

function ItemCarrousel({
  thumb: {
      url
  },
  titulo,
  descripcion
}) {
  return (
    <StyledItemCarrousel>
      <div className="review-wrapper">
        <div className="img-wrapper">
          <Img
            src={`${process.env.REACT_APP_BACKEND_URL}${url}`}
            alt={username}
          />
        </div>
        <div className="infos-wrapper">
          <p className="username">{username}</p>
          <p className="published">
            Published {moment().diff(moment(created_at), 'days')} days ago
          </p>
          <div className="rate-wrapper">
            <Rate min={0} max={5} value={note} />
          </div>
        </div>
        <div className="comment">
          <p>{content}</p>
        </div>
      </div>
    </StyledItemCarrousel>
  );
}


ItemCarrousel.defaultProps = {
  thumb: null,
  titulo: null,
  descripcion: null
};

ItemCarrousel.propTypes = {
  thumb: PropTypes.shape({ url: PropTypes.string }),
  titulo: PropTypes.string,
  descripcion: PropTypes.string
};

export default ItemCarrousel;
