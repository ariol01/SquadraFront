import logo from './logo.svg';
import './App.css';
import { Button, Row, Col, Card, Nav } from 'react-bootstrap';
import { CartaoLead } from './componentes/CartaoLead';
import React, { useState, useEffect } from "react";
import api from './api/Api';

function App() {

  const [isActive, setActive] = useState(false);

  const [cartoes, setCartao] = useState([]);

  async function getCartao() {
    // let response = await api.get('/api/item');
    let { data } = await api.get('/api/CartaoLead')

    console.log(data)

    setCartao(data)

  }

  useEffect(() => {

    getCartao()

  }, [])

  const toggleClass = () => {
    setActive(!isActive);
  };

  return (
    <div className="App">
      <>
        <Card>
          <Card.Header>
            <Nav variant="pills" defaultActiveKey="#first">
              <Nav.Item>
                <Nav.Link href="#first" onClick={toggleClass}>Invited</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#link" onClick={toggleClass}>Accepted</Nav.Link>
              </Nav.Item>

            </Nav>
          </Card.Header>
          <Card.Body>

            <Row className="mx-0">
              {cartoes.map(cartao => (

                <CartaoLead key={cartao.id} cartao={cartao} />
              )
              )}
            </Row>



          </Card.Body>

        </Card>

      </>
    </div>
  );
}

export default App;
