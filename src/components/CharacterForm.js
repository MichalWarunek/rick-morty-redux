import React from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Col } from 'reactstrap';




export default class CharacterForm extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = { 
      image: props.character? props.character.image: null,
      name: props.character ? props.character.name: '',
      status: props.character ? props.character.status: '',
      species: props.character ? props.character.species: '',
      gender: props.character ? props.character.gender: '',
      error: ''
     };
  }
    
  onImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
        let reader = new FileReader();
        reader.onload = (e) => {
            this.setState({image: e.target.result});
        };
        reader.readAsDataURL(e.target.files[0]);
    }
}

  onChangeName = (e) => {
    const name = e.target.value;
    this.setState(() => ({name}));
  }

  
  onChangeStatus = (e) => {
    const status = e.target.value;
    this.setState(() => ({status}));
  }

  
  onChangeSpecies = (e) => {
    const species = e.target.value;
    this.setState(() => ({species}));
  }

  onChangeGender = (e) => {
    const gender = e.target.value;
    this.setState(() => ({gender}));
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.setState(() => ({ error: "No 'Access-Control-Allow-Origin'"}));

    // if(!this.state.status || !this.state.species) {
    //   this.setState(() => ({ error: 'Please provide status and species.'}));
    // } else {
    //   //clear error
    //   this.setState(() => ({ error:'' }));
    //   this.props.onSubmit({
    //     name: this.state.name,
    //     status: this.state.status,
    //     species: this.state.species
    //   });
    // }
  }
  
    render () {
        return (
          <div>
              <Col md="3" sm="4" xs="5">
                <img 
                  className="img-thumbnail" 
                  src={ this.state.image===null ? "/images/default.jpeg" : this.state.image }
                  id="target" 
                  />
              </Col>
                <form className="form" onSubmit={this.onSubmit}>
                  {this.state.error && <p className="form__error">{this.state.error}</p>}
                
                    <input 
                        type="file"
                        accept="image/png, image/jpeg" 
                        onChange={this.onImageChange} 
                    />
                    <input
                        type="text"
                        placeholder="Name"
                        autoFocus
                        className="text-input"
                        value={this.state.name}
                        onChange={this.onChangeName}
                    />
                    <input 
                        type="text"
                        placeholder="Status"
                        className="text-input"
                        value={this.state.status}
                        onChange={this.onChangeStatus}
                    />
                    <input 
                        type="text"
                        placeholder="Species"
                        className="text-input"
                        value={this.state.species}
                        onChange={this.onChangeSpecies}
                    />
                    <input 
                        type="text"
                        placeholder="Gender"
                        className="text-input"
                        value={this.state.gender}
                        onChange={this.onChangeGender}
                    />
                    <div>
                      <Button size="lg" color="primary">Save Character</Button>
                    </div>
                </form>
                    <Link to={`/dashboard`}>
                      <Button size="lg" outline color="secondary">Cancel</Button>
                    </Link>
              </div>
        )
    }
}