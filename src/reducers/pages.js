const pagesReducerDefaultState = { 
 numberOfPages: [],
 currentPage: '',
 previousPage: '',
 nextPage: '',
};

export default (state = pagesReducerDefaultState, action) => {
  switch (action.type) {
    case 'GET_PAGE_NUMBERS': 
          const pageNumbers = [];
          for (let i = 1; i <= action.numberOfPages.pages; i++) {
            pageNumbers.push(i);
          }
                return Object.assign({},
                    ...state, { 
                    numberOfPages: pageNumbers,
                   
                });
    case 'GET_PAGE_INFO':
            return {
              ...state,
              currentPage: action.currentPage,
              previousPage: (action.currentPage - 1),
              nextPage:  (action.currentPage + 1),
            };
          
          
    
    default:
        return state;
  }
}