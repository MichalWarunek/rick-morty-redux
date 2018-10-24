import React from 'react';
import CharacterForm from './CharacterForm';



export class AddCharacterPage extends React.Component {

  

    render() {
        return (
            <div>
              <div className="page_header">
                <div className="content-container">
                  <h1 className="page-header_title">Add Character</h1>
                </div>
              </div>
            <div className="content-container">
              <CharacterForm 
              
              />
            </div>
            </div>
        );
    }
};




export default AddCharacterPage;