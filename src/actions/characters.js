
//ADD_CHARACTER
export const addCharacters = (character) => ({
  type: 'ADD_CHARACTERS',
  character
});


// CORS_TEST
// export const loadCharactersFromServer = (page) => {
//   return dispatch => {
//   return fetch(`https://rickandmortyapi.com/api/character/?page=${page}`, {
//     method: "Post",
//     body : JSON.stringify({fakeData : 1 }),
//     headers : {
//       'Content-type' : "application/json"
//     }
//   })
//     .then(res => res.json())
//     .then(json => dispatch(addCharacters(json.results)))
//   }
// };


//FETCH_CHARACTERS
export const loadCharactersFromServer = (page) => {
  return dispatch => {
  return fetch(`https://cors-escape.herokuapp.com/https://rickandmortyapi.com/api/character/?page=${page}`)
    .then(res => res.json())
    .then(json => dispatch(addCharacters(json.results)))
  }
};



export const nameFilter = (name) => {
  return dispatch => {
  return fetch(`https://rickandmortyapi.com/api/character/?name=${name}`)
    .then(res => res.json())
    .then(json => dispatch(addCharacters(json.results)))  
  }
};