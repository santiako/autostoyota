/**
 *
 * Menu
 *
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

import StyledMenu from './StyledMenu';

const Menu = (props) => {
  const [collapsed, setCollapsed] = useState(true);
  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Navbar color="faded" light>
        <NavbarBrand href="/" className="mr-auto">reactstrap</NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="/components/">Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

Menu.propTypes = {
  type: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
  // pass in custom element to use
}

export default Menu;





//import React from 'react';
//import PropTypes from 'prop-types';
//import { Row } from 'reactstrap';
//
//import {
//  itemsliderDefaultShape,
//  itemsliderShape,
//} from '../../shapes/itemslider';
//
//import StyledMenu from './StyledMenu';
//import Img from '../Img';
//import dots from '../../assets/img/dots.svg';
//
//function Menu({ restaurant }) {
//  const { item_sliders } = restaurant;
//
//    return (
//    <>
//    <StyledCarrousel />
//        <div className="carr-wrapper">
//            <Row>
//                {item_sliders.map(item => (
//                    <ItemCarrousel {...item} key={item.id} />
//                ))}
//            </Row>
//            <Row>
//                <div className="dots-wrapper">
//                    <Img src={dots} />
//                </div>
//            </Row>
//        </div>
//    </>
//    );
//}
//
//Menu.defaultProps = {
//  ...itemsliderDefaultShape
//};
//
//Menu.propTypes = {
//  ...itemsliderShape
//};
//
//export default Menu;
//








