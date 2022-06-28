import logo from './logo.svg';
import './App.css';
import { Button, Row, Col, Card, Nav } from 'react-bootstrap';
import { CartaoLead } from './componentes/CartaoLead';
import React, { useState, useEffect } from "react";
import axios from 'axios';


function App() {
  
  const [isActive, setActive] = useState(false);
  
  const toggleClass = () => {
    setActive(!isActive);
  };
  
  return (
    <div className="App">
      <>
        <Card>
          <Card.Header>
            <Nav variant="pills" defaultActiveKey={isActive ? '#first': '"#link'}>
              <Nav.Item>
                <Nav.Link href="#first" onClick={toggleClass}>Invited</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#link" onClick={toggleClass}>Accepted</Nav.Link>
              </Nav.Item>

            </Nav>
          </Card.Header>
          <Card.Body>

            <CartaoLead/>

          </Card.Body>

        </Card>      
     
      </>
    </div>
  );
}

export default App;
