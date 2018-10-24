


export default (characters, {text, sortBy}) => {
    return characters.filter((character) => {
        const textMatch = character.name.toLowerCase().includes(text.toLowerCase());

        return textMatch;
    }).sort((a,b) => {
      if (sortBy === 'name') {
        return a.name < b.name ? -1 : 1;
      } else if (sortBy === 'status') {
        return a.status < b.status ? -1 : 1;
      } else if (sortBy === 'species') {
        return a.species < b.species ? -1 : 1;
      } else if (sortBy === 'gender') {
        return a.gender < b.gender ? -1 : 1;
      }
    });
};