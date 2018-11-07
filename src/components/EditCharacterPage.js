import React from 'react';
import CharacterForm from './CharacterForm';
import { connect } from 'react-redux';



export class EditCharacterPage extends React.Component {

  

    render() {
        return (
            <div>
              <div className="page_header">
                <div className="content-container">
                  <h1 className="page-header__title">Edit Character</h1>
                </div>
              </div>
            <div className="content-container">
              <CharacterForm 
                character={this.props.character}
              />
            </div>
            </div>
        );
    }
};


const mapStateToProps = (state, props) => ({
  character: state.characters.find((character) => character.id == props.match.params.id)
});


export default connect(mapStateToProps)(EditCharacterPage);