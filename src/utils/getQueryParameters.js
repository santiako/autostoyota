/* eslint-disable prefer-template */
export default (location, n) => {
    // search, 'category'
    // half = search.split('category' + = )
  const half = location.split(n + '=')[1];

  return half !== undefined ? decodeURIComponent(half.split('&')[0]) : null;
};
