import React from 'react';
import { Col } from 'reactstrap';
import { Link } from 'react-router-dom';

const CharacterListItem = ({id, image, name, status, species, gender }) => (
 

  <Col md="2" sm="4" xs="6">
    <Link to={`/edit/${id}`}>
      <img className="item-image" src={image}/>
    </Link>
    <div className="item">
    <h3>{name}</h3>
      <div className="show-for-desktop">
        <div className="item-properties"> 
          <div>
            <h4>status</h4> 
          </div>
          <div className="item-property">
            <h4>{status.toLowerCase()}</h4> 
            </div>
          </div>
          <div className="item-properties"> 
            <div>
              <h4>species</h4>
            </div>
          <div className="item-property">
            <h4>{species.toLowerCase()}</h4>
            </div>
          </div>
          <div className="item-properties"> 
          <div>
            <h4>gender</h4> 
          </div>
          <div className="item-property">
            <h4>{gender.toLowerCase()}</h4> 
            </div>
          </div>
        </div>
    </div>
  </Col>
);

export default CharacterListItem;