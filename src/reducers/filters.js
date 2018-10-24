
const filtersReducerDefaultState = {
  text: '',
  sortBy: 'name'
};

export default (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      return {
        ...state,
        text: action.text
      }
    case 'SORT_BY_NAME':
      return {
        ...state,
        sortBy: 'name'
      }
    case 'SORT_BY_STATUS':
      return {
        ...state,
        sortBy: 'status'
      }
    case 'SORT_BY_SPECIES':
      return {
        ...state,
        sortBy: 'species'
      }
    case 'SORT_BY_GENDER':
      return {
        ...state,
        sortBy: 'gender'
      }
      default:
      return state;
  }
};