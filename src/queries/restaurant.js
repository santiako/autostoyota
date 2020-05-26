/* eslint-disable import/prefer-default-export */
import gql from 'graphql-tag';


// , $reviewsFilter: JSON
    // reviewsConnection(where: $reviewsFilter) {
    //   aggregate {
    //     count
    //   }
    // }

const GET_RESTAURANT = gql`
  query restaurant($id: ID!) {
    restaurant(id: $id) {
      id
      category {
        name
      }
      description
      anio
      precio
      modeloext
      titulo
      titulo20px
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
