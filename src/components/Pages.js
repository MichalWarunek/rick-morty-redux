import React from 'react';
import { connect } from 'react-redux';
import PageItem from './PageItem';
import { Pagination,PaginationItem,PaginationLink, Button, Container } from 'reactstrap';
import { getPageInfo } from '../actions/pages';
import { loadCharactersFromServer } from '../actions/characters';



  const Pages = ({pages,setCurrentPage,currentPage = 1,previousPage,nextPage = 2}) => (
    <Container className="pages-list">
      <Pagination size="lg" aria-label="Page navigation example">
        <PaginationItem className="pagination">
          <Button color="primary"
            onClick = {() => setCurrentPage(previousPage)}
            disabled={currentPage==1}
          >
          Previous
          </Button>
          <div className="show-for-mobile">
            <PaginationLink className="page-link">{currentPage}</PaginationLink>
          </div>
          {
              pages === 0 ? (
                <h1>No pages</h1>
            ) : (
              pages.map((page) => {
                const pageNumber = page;
                return <PageItem key={page} pageNumber={page} />;
              })
              )
          }
          <Button color="primary"
            onClick = {() => setCurrentPage(nextPage)}
            disabled={currentPage==pages.length}
            >
            Next
          </Button>
        </PaginationItem>
      </Pagination>
    </Container>
)



const mapStateToProps = (state) => {
  return {
    pages: state.pages.numberOfPages,
    currentPage: state.pages.currentPage,
    previousPage: state.pages.previousPage,
    nextPage: state.pages.nextPage
  };
};

const mapDispatchToProps = (dispatch) => ({
    setCurrentPage: (pageNumber) => {
    dispatch(getPageInfo(pageNumber));
    dispatch(loadCharactersFromServer(pageNumber));
  }
}); 


export default connect(mapStateToProps, mapDispatchToProps)(Pages);