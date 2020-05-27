/**
 *
 * Header
 *
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from 'reactstrap';

import StyledHeader from './StyledHeader';
import Link from '../Link';
import logo from '../../assets/img/logo.svg';


function Header({ links }) {
  const [isOpen, toggleIsOpen] = useState(false);

  const toggleCollapse = () => {
      toggleIsOpen(!isOpen);
  };
  var pathname = window.location.pathname;

// <Navbar expand="xl">

  return (
    <StyledHeader>
      <div className={"backdrop " + ((isOpen) ? "bvisible" : "")}></div>
      <Navbar>
        <div className="container">
          <div className="navbar-brand">
            <Link url="/">
              <img src={logo} alt="logo" />
            </Link>
          </div>

        <Nav navbar className="staticnav">
          <NavItem key={links[0].to}>
            <Link
              clase={links[0].clase}
              url={links[0].to}
              active={window.location.pathname === links[0].to}
            >
              <span title={links[0].name}>{links[0].name}</span>
            </Link>
          </NavItem>
          <NavItem key={links[1].to}>
            <Link
              clase={links[1].clase}
              url={links[1].to}
              active={(pathname.search(/\d\/informations/) !== -1) ? true : false}
            >
              <span title={links[1].name}>{links[1].name}</span>
            </Link>
          </NavItem>
        </Nav>

        <Collapse isOpen={isOpen} navbar>
          <Nav navbar>
            {links.map(link => {
              return (
                <NavItem key={link.to} onClick={toggleCollapse}>
                  <Link
                    clase={link.clase}
                    url={link.to}
                    active={window.location.pathname === link.to}
                  >
                    <span title={link.name}>{link.name}</span>
                  </Link>
                </NavItem>
              );
            })}
          </Nav>
        </Collapse>
        <NavbarToggler onClick={toggleCollapse}>
          <div className="nav-icon">
            <span />
            <span />
            <span />
            <span />
          </div>
          <p className="nav-cerrar">Menú</p>
        </NavbarToggler>
        </div>
      </Navbar>
    </StyledHeader>
  );
}

Header.defaultProps = {
  links: [],
};
Header.propTypes = {
  links: PropTypes.array,
};

export default Header;
