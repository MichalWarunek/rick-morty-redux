import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByName, sortByStatus, sortBySpecies, sortByGender } from '../actions/filters';


export class Filters extends React.Component {


onTextChange = (e) => {
  this.props.setTextFilter(e.target.value);
}

onSortChange = (e) => {
  if (e.target.value === 'status') {
    this.props.sortByStatus();
  }
    else if (e.target.value === 'name') {
    this.props.sortByName(); 
  } else if (e.target.value === 'species') {
    this.props.sortBySpecies();
  } else if (e.target.value === 'gender') {
    this.props.sortByGender();
  } 
}

render() {
  return (
    <div className="container">
      <div className ="input-group">
        <div className="input-group__item">
          <input 
          type="text"
          className="text-input" 
          placeholder="Search by name..."
          value={this.props.filters.text} 
          onChange = {this.onTextChange}/>
        </div>
        <div className="input-group__item">
          <select
          className="select show-for-desktop"
          value = {this.props.filters.sortBy}
          onChange = {this.onSortChange}>
            <option value="name">Name</option>
            <option value="status">Status</option>
            <option value="species">Species</option>
            <option value="gender">Gender</option>
          </select>
        </div> 
      </div>
  </div>
  )
}
}
const mapStateToProps = (state) => {
  return {
    filters: state.filters
  };
};

const mapDispatchToProps = dispatch => ({
  setTextFilter: (text) => dispatch(setTextFilter(text)),
  sortByName: () => dispatch(sortByName()),
  sortByStatus: () => dispatch(sortByStatus()),
  sortBySpecies: () => dispatch(sortBySpecies()),
  sortByGender: () => dispatch(sortByGender())
});


export default connect(mapStateToProps, mapDispatchToProps)(Filters);
