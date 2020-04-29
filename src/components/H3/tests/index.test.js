import React from 'react';
import { shallow } from 'enzyme';

import H3 from '../index';

describe('<H3 />', () => {
  it('should not crash', () => {
    shallow(<H3 />);
  });
});
