/**
 *
 * Carrousel ficha-modelo
 *
 */

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Row } from 'reactstrap';

import {
  itemsliderDefaultShape,
  itemsliderShape,
} from '../../shapes/itemslider';

import StyledCarrousel from './StyledCarrousel';
import ItemCarrousel from '../ItemCarrousel';
import Img from '../Img';

import dots from '../../assets/img/dots.svg';
import flechader from '../../assets/img/flechader.svg';


function Carrousel({ restaurant }) {
  const { item_sliders } = restaurant;
  var itemslideredim = item_sliders;
  const size = useWindowSize();
  const redim = redimItemSlider();

// Hook
function useWindowSize() {
  const isClient = typeof window === 'object';

  function getSize() {
    return {
      width: isClient ? window.innerWidth : undefined,
      height: isClient ? window.innerHeight : undefined
    };
  }

  const [windowSize, setWindowSize] = useState(getSize);

  useEffect(() => {
    if (!isClient) {
      return false;
    }
    
    function handleResize() {
      setWindowSize(getSize());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty array ensures that effect is only run on mount and unmount

  return windowSize;
}


function redimItemSlider() {
    var wwidth = size.width;

    // Dependiendo el ancho de la ventana va agregando o quitando elementos del Carrousel
    switch (true) {
        // Mobile (item 1)
        case (wwidth > 0 && wwidth < 375):
            itemslideredim = item_sliders.slice(0, 3);
        break;

        // Mobile 2 (items 0, 1, 5)
        case (wwidth > 374 && wwidth < 583):
            itemslideredim = item_sliders.slice(0, 2);
            itemslideredim.push(item_sliders[5]);
        break;

        // Tablet 1 (items 0-2, 5)
        case (wwidth > 582 && wwidth < 790):
            itemslideredim = item_sliders.slice(0, 3);
            itemslideredim.push(item_sliders[5]);
        break;

        // Tablet 2 (items 0-3, 5)
        case (wwidth > 789 && wwidth < 997):
            itemslideredim = item_sliders.slice(0, 4);
            itemslideredim.push(item_sliders[5]);
        break;

        // Desktop (todos los items)
        case (wwidth > 996):
            itemslideredim = item_sliders;
        break;
    }
}

  return (
    <>
    <StyledCarrousel />
        <div className="carr-wrapper">
            <div className="leftarrow">
                <Img src={flechader} />
            </div>
            <div className="rightarrow">
                <Img src={flechader} />
            </div>
            <Row>
                {redim}
                {itemslideredim.map(item => (
                    <ItemCarrousel {...item} key={item.id} />
                ))}
            </Row>
            <Row>
                <div className="dots-wrapper">
                    <Img src={dots} />
                </div>
            </Row>
        </div>
    </>
  );
}

Carrousel.defaultProps = {
  ...itemsliderDefaultShape
};

Carrousel.propTypes = {
  ...itemsliderShape
};

export default Carrousel;
