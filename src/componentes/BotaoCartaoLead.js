import { Button, Row, Col, Card, Nav } from 'react-bootstrap';
import api from '../api/Api';
import { useState, useEffect } from "react";
import { useCardContext } from '../hooks/CardContext';
import { AttachMoney } from '@mui/icons-material';

export const BotaoCartaoLead = ({ cartao }) => {

  const { cartoes, setCartoes } = useCardContext()

  async function onUpdateAccepted(value) {

    await api.put(`/api/CartaoLead/${value}?value=1`)
  };

  async function onUpdateDecline(value) {

    let response = await api.put(`/api/CartaoLead/${value}?value=2`)
    setCartoes(response.data)
  };

  useEffect(() => {
    // Atualiza o título do documento usando a API do browser

  });

  return (
    <div className="mb-2">
      <Button as={Col} variant="primary" onClick={() => onUpdateAccepted(cartao.id)}>Accepted</Button>{' '}
      <Button as={Col} variant="secondary" onClick={() => onUpdateDecline(cartao.id)}>Decline</Button>{' '}{' '} <AttachMoney/>{cartao.price}
    </div>


  )
}