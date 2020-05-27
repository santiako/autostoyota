/* eslint-disable import/prefer-default-export */
import gql from 'graphql-tag';

const GET_RESTAURANT = gql`
  query restaurant($id: ID!) {
    restaurant(id: $id) {
      id
      category {
        name
      }
      description
      description2
      description3
      anio
      precio
      modeloext
      titulo
      titulo20px
      titulo20px2
      autoabajo {
        url
      }
      autoabajo2 {
        url
      }
      cover {
        url
      }
      name
      item_sliders {
        thumb {
          url
        }
        titulo
        descripcion
      }
    }

  }
`;

export { GET_RESTAURANT };
