
//GET_PAGE_NUMBERS
export const getPageNumbers = (numberOfPages) => ({
  type: 'GET_PAGE_NUMBERS',
  numberOfPages
});


//GET_PAGE_INFO
export const getPageInfo = (currentPage) => ({
  type: 'GET_PAGE_INFO',
  currentPage
});


// export const setCurrentPage = (currentPage) => {
//   return (dispatch) => {
//    dispatch({type: 'SET_CURRENT_PAGE',currentPage});
//   }
//  }


//GET_PAGES

export const getPages = () => {
  return dispatch => {
  return fetch(`https://rickandmortyapi.com/api/character/`)
    .then(res => res.json())
    .then(json => dispatch(getPageNumbers(json.info)));
  }
};


