/**
 *
 * Carrousel ficha-modelo
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Row } from 'reactstrap';

import {
  itemsliderDefaultShape,
  itemsliderShape,
} from '../../shapes/itemslider';

import StyledCarrousel from './StyledCarrousel';
import ItemCarrousel from '../ItemCarrousel';
//import CardSection from '../CardSection';
//import Img from '../Img';
//key={item.id}

function Carrousel({ restaurant }) {
  const { item_sliders } = restaurant;

    return (
    <StyledCarrousel>
        <div className="carr-wrapper">
        <Row>
            {item_sliders.map(item => (
                <ItemCarrousel {...item} />
            ))}
        </Row>
        </div>
    </StyledCarrousel>
    );
}

Carrousel.defaultProps = {
  ...itemsliderDefaultShape
};

Carrousel.propTypes = {
  ...itemsliderShape
};

export default Carrousel;
