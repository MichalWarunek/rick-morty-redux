import React from 'react';
import { connect } from 'react-redux';
import { getPageInfo } from '../actions/pages';
import { loadCharactersFromServer } from '../actions/characters';
import { PaginationLink } from 'reactstrap';


const PageItem = ({ pageNumber,setCurrentPage }) => (
  <div className="show-for-desktop">
      <PaginationLink className="page-link"
      onClick = {() => setCurrentPage(pageNumber)}
        id = { pageNumber }>
        { pageNumber }
      </PaginationLink>
      </div>
);


const mapDispatchToProps = (dispatch) => ({
  setCurrentPage: (pageNumber) => {
    dispatch(getPageInfo(pageNumber));
    dispatch(loadCharactersFromServer(pageNumber));
  }
}); 

export default connect(undefined,mapDispatchToProps)(PageItem);

