import React from 'react';
import { connect } from 'react-redux';
import selectCharacters from '../selectors/characters';
import CharacterListItem from './CharacterListItem';
import { Container, Row, Col } from 'reactstrap';
import Pages from './Pages';
import { Link } from 'react-router-dom';


const CharacterList = (props) => (
  <div>
  <Container>
    <Row>
      {
        props.characters.length === 0 ? (
          <p className="form__error">No characters</p>
        ) : (
          props.characters.map((character) => {
            return <CharacterListItem key={character.id} {...character} />;
          }
          
          )
        )
        
      }
      
      <Col md="2" sm="4" xs="6">
        <div className="add-character-button">
          <Link to={`/create`}>
            <img className="add-image" src="/images/add.jpg" 
            />
          </Link>
        </div>
      </Col>
      

    </Row>
    <Pages />
  </Container>
  </div>
);





const mapStateToProps = (state) => {
  return {
    // characters: state.characters
    characters: selectCharacters(state.characters, state.filters)
  };
};


export default connect(mapStateToProps)(CharacterList);