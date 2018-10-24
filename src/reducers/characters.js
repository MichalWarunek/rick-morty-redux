
const charactersReducerDefaultState = [];

export default (state = charactersReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_CHARACTERS':
            return Object.assign(
                action.character
            );          
      default:
        return state;
  }
}