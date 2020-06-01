/**
 *
 * Filters
 *
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Collapse, NavbarToggler } from 'reactstrap';

import Icon from '../../assets/img/icon_filter.png';
import StyledFilters from './StyledFilters';
import H1 from '../H1';
import FiltersGroup from '../FiltersGroup';

function Filters({ filters, onChange }) {
  const [isOpen, toggleIsOpen] = useState(false);

  return (
    <>
      <StyledFilters />
        <div className="filters-wrapper">
          {filters.map(filter => {
            return (
              <FiltersGroup
                {...filter}
                key={filter.name}
                /* istanbul ignore next */
                onChange={e => {
                  /* istanbul ignore next */
                  if (window.innerWidth < 768) {
                    toggleIsOpen(!isOpen);
                  }
                  /* istanbul ignore next */
                  onChange(e);
                }}
              />
            );
          })}
        </div>
      <hr />
    </>
  );
}

Filters.defaultProps = {
  filters: [],
  onChange: () => {},
};

Filters.propTypes = {
  filters: PropTypes.array,
  onChange: PropTypes.func,
};

export default Filters;
