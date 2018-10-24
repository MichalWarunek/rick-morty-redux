
//SET_TEXT_FILTER

export const setTextFilter = (text= '') => ({
  type: 'SET_TEXT_FILTER',
  text
});

//SORT_BY_NAME

export const sortByName = () => ({
  type: 'SORT_BY_NAME',
});

//SORT_BY_STATUS

export const sortByStatus = () => ({
  type: 'SORT_BY_STATUS',
});

//SORT_BY_SPECIES

export const sortBySpecies = () => ({
  type: 'SORT_BY_SPECIES',
});

//SORT_BY_GENDER

export const sortByGender = () => ({
  type: 'SORT_BY_GENDER',
});