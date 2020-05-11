/**
 *
 * FiltersGroup
 *
 */

import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import PropTypes from 'prop-types';
import Radio from '../Radio';


function FiltersGroup({
  title,
  name,
  options,
  value,
  onChange,
  tipo
}) {

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen(prevState => !prevState);
  const optLen = options.length;


// {(title == "Filtrar por") ? "true" : "false"}
// {(title === "Filtrar por") ? "fleft" : ""}
// (tipo == 'radio' && window.innerWidth > 767)

// si el filtro es de tipo radio y el ancho de la ventana es >        767 muestra el filtro desplegado
  return (
    <div>

      <div className={"filteradio " + ((title === "Filtrar por") ? "fcat" : "")}>
      <p>{title}</p>
      <ul>
        {options.map(option => {
          return (
            <li key={option.name || option}>
              <Radio
                onChange={onChange}
                name={name}
                message={option.name || option}
                value={option.id || option}
                checked={value === option.id || value === option}
              />
            </li>
          );
        })}
      </ul>
      </div>

    <div className={"filterdrop " + ((title === "Filtrar por") ? "fleft" : "")}>
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret>{ title }</DropdownToggle>
      <DropdownMenu flip="false" right={title === "Ordenar por"}>
        {options.map((option, i) => {
            return (
            <>
            <Radio
                onChange={onChange}
                name={name}
                message={option.name || option}
                value={option.id || option}
                checked={value === option.id || value === option}
              />
            {(optLen === i + 1) ? '' : <DropdownItem divider />}
            </>
            );
        })}
      </DropdownMenu>
      </Dropdown>
    </div>
    </div>
  );
}

FiltersGroup.defaultProps = {
  title: '',
  name: '',
  onChange: () => {},
  options: [],
  value: null,
  tipo: 'radio'
};

FiltersGroup.propTypes = {
  title: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  options: PropTypes.array,
  value: PropTypes.string,
  tipo: PropTypes.string
};

DropdownMenu.propTypes = {
  right: PropTypes.bool
};

export default FiltersGroup;
