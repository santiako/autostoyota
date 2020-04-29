import React from 'react';
import { shallow } from 'enzyme';

import P from '../index';

describe('<P />', () => {
  it('should not crash', () => {
    shallow(<P />);
  });
});
