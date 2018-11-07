import React from 'react';
import { connect } from 'react-redux';
import AsyncSelect from 'react-select/lib/Async';
import { components } from 'react-select';
import { nameFilter } from '../actions/characters';
import { Link } from 'react-router-dom';

export class Search extends React.Component {

  state = {
    menuIsOpen: false
  }

loadThumbnails = ({ children, ...props}) => {
    return (
      <Link 
        to={`/edit/${props.data.id}`}  
        style={{ textDecoration: 'none' }}
      >
        <components.Option {...props}>
          <img className="search-thumbnail" src={props.data.image} />{' '}
          {children}
        </components.Option> 
      </Link>
    );
  };


filterOptions = (inputValue) => 
  this.props.characters.map((character) => 
  {
    return {
      value: character.name,
      label: character.name,
      image: character.image,
      id:character.id
    }
  })
  .filter(i =>
    i.label.toLowerCase().includes(inputValue.toLowerCase())
  );

loadOptions = (inputValue, callback) => {
  setTimeout(() => {
    callback(this.filterOptions(inputValue));
}, 500);
};
  
onChangeValue = (newValue) => {
  const inputValue = newValue.replace(/\W/g, '');
  this.setState({ inputValue });
  this.props.nameFilter(inputValue);
};

handleCloseMenu = () => {
  this.setState(({
    menuIsOpen: false,
  }))
  input.onBlur(input.value)
};

handleOpenMenu = () => {
  this.setState(({
    menuIsOpen: true,
  }))
  input.onBlur(input.value)
};

render() {
  return (
   <div className="container">
    <AsyncSelect 
      className="search-input"
      components={{ Option: this.loadThumbnails }}
      onFocus={this.handleOpenMenu}
      onBlur={this.handleCloseMenu}
      menuIsOpen={this.state.menuIsOpen}
      loadOptions={this.loadOptions}
      defaultOptions
      onInputChange={this.onChangeValue}
      placeholder="Search..."
    />
  </div>    
  )};
};

const mapStateToProps = (state) => {
  return {
    characters: state.characters
  };
};

const mapDispatchToProps = dispatch => ({
  nameFilter: (name) => dispatch(nameFilter(name))
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
