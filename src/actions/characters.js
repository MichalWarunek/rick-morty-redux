
//ADD_CHARACTER
export const addCharacters = (character) => ({
  type: 'ADD_CHARACTERS',
  character
});

// export const startAddCharacter = (characterData = {}) => {
//   return (dispatch) => {
//     const {
//       description = '',
//       note =''
//     }
//   }
// }

//FETCH_CHARACTERS

export const loadCharactersFromServer = (page) => {
  return dispatch => {
  return fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
    .then(res => res.json())
    .then(json => dispatch(addCharacters(json.results)))
    
  }
};

export const nameFilter = (name) => {
  return dispatch => {
  return fetch(`https://rickandmortyapi.com/api/character/?name=${name}`)
    .then(res => res.json())
    .then(json => dispatch(addCharacters(json.results)))
    .then(json => console.log(json));
    
  }
};