import PropTypes from 'prop-types';

const itemsliderDefaultShape = {
  thumb: null,
  titulo: null,
  descripcion: null
};

const itemsliderShape = {
  thumb: PropTypes.shape({ url: PropTypes.string }),
  titulo: PropTypes.string,
  descripcion: PropTypes.string
};

export { itemsliderDefaultShape, itemsliderShape };
