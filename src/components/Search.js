import React from 'react';
import Select, { components } from 'react-select';
import { connect } from 'react-redux';


const loadThumbnails = (props) => {
  
return (
    <components.Option {...props}>
    <img className="search-thumbnail" src={props.value} />{' '}
    {props.children}
    </components.Option> 
  );
};


const onChangeValue = (props) => (
  console.log(props.label)
);



const Search = ({characters}) => (
  <div className="container">
    <Select 
    className="search-input"
    onChange={onChangeValue}
    components={{ Option: loadThumbnails }}
    options={ 
      characters.map((character) => 
      {
        return {
          value: character.image,
          label: character.name
        }
      })}
    placeholder="Search..."
    />
  </div>
);

const mapStateToProps = (state) => {
  return {
    characters: state.characters
  };
};


export default connect(mapStateToProps)(Search);
