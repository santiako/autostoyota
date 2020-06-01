/**
 *
 * ItemCarrousel
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'reactstrap';

import StyledItemCarrousel from './StyledItemCarrousel';

import Img from '../Img';
import H3 from '../H3';
import P from '../P';


function ItemCarrousel({
  thumb: {
      url
  },
  titulo,
  descripcion
}) {

  return (
    <>
    <StyledItemCarrousel />
        <Col className="col-wrapper">
            <div className="img-wrapper">
                <Img
                    src={`${url}`}
                />
            </div>
            <H3>{ titulo }</H3>
            <P>{ descripcion }</P>
        </Col>
    </>
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
