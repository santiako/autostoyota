/**
 *
 * FiltersGroup
 *
 */

import React, { useState, useEffect } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import PropTypes from 'prop-types';
import Radio from '../Radio';
import sizes from '../../assets/styles/sizes';


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
  const size = useWindowSize();

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

// si el filtro es "filtrar por": 
//    si width > sizes.tablet:
//        muestra radio buttons,
//     no: muestra dropdown.
// no: muestra dropdown.

  const radio = 
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
      </div>;

  const drop = 
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
      </div>;

  return (
    <div>
      {(title == "Filtrar por") ? ((size.width > 991) ? radio : drop) : drop}
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
