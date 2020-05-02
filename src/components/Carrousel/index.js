/**
 *
 * Carrousel ficha-modelo
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import {
  itemsliderDefaultShape,
  itemsliderShape,
} from '../../shapes/itemslider';

import StyledCarrousel from './StyledCarrousel';
import ItemCarrousel from '../ItemCarrousel';
//import CardSection from '../CardSection';
//import Img from '../Img';

function Carrousel({ restaurant }) {
  const { item_sliders } = restaurant;

    return (
    <StyledCarrousel>
        <div className="carr-wrapper">
            {item_sliders.map(item => (
                <ItemCarrousel {...item} key={item.id} />
            ))}
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
