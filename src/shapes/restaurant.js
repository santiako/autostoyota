import PropTypes from 'prop-types';

import { categoryDefaultShape, categoryShape } from './category';
import { reviewDefaultShape, reviewShape } from './review';

const restaurantDefaultShape = {
  category: categoryDefaultShape,
  cover: [],
  anio: null,
  precio: null,
  modeloext: null,
  titulo: null,
  titulo20px: null,
  autoabajo: null,
  autoabajo2: null,
  description: null,
  id: null,
  name: null,
  __typename: 'Restaurant'
};

const restaurantShape = {
  category: PropTypes.shape(categoryShape),
  cover: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string,
      __typename: PropTypes.string,
    }),
  ),
  anio: PropTypes.number,
  precio: PropTypes.string,
  modeloext: PropTypes.string,
  titulo: PropTypes.string,
  titulo20px: PropTypes.string,
  autoabajo: PropTypes.shape({ url: PropTypes.string, __typename: PropTypes.string }),
  autoabajo2: PropTypes.shape({ url: PropTypes.string, __typename: PropTypes.string }),
  description: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  __typename: PropTypes.string
};

export { restaurantDefaultShape, restaurantShape };
