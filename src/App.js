import logo from './logo.svg';
import './App.css';
import { Button, Row, Col, Card, Nav } from 'react-bootstrap';
import { CartaoLead } from './componentes/CartaoLead';
import React, { useState, useEffect, useContext } from "react";
import api from './api/Api';
import { Link } from 'react-router-dom';
import { CartaoLeadAccepted } from './componentes/CartaoLeadAccepted';
import { useCardContext } from './hooks/CardContext';

function App() {

  const {cartoes, setCartoes} = useCardContext()

    async function getCartaoAccepted() {
    let { data } = await api.get('/api/CartaoLead/1')

    console.log(data)

    setCartoes(data)
  }
  
  async function getCartaoInvited() {
    let { data } = await api.get('/api/CartaoLead/0')

    console.log(data)

    setCartoes(data)
  }

  return (
    <div className="App">
      <>
        <Card>
          <Card.Header>
            <Nav variant="pills" defaultActiveKey="#first">
              <Nav.Item>
                <Nav.Link onClick={getCartaoInvited} href="#first">Invited</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#link" onClick={getCartaoAccepted}>Accepted</Nav.Link>
              </Nav.Item>
            </Nav>
          </Card.Header>
          <Card.Body>
            {cartoes && cartoes.map(cartao => {
              if(cartao.status == 0) {
                return <CartaoLead key={cartao.id} cartao={cartao} />
              } else if (cartao.status == 1) {
                return <CartaoLeadAccepted key={cartao.id} cartao={cartao} />
              }
            })}
          </Card.Body>
        </Card>

      </>
    </div>
  );
}

export default App;
