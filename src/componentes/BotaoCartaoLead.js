import { Button, Row, Col, Card, Nav } from 'react-bootstrap';
import api from '../api/Api';
 

export const BotaoCartaoLead = ({cartao}) => {

    async function onUpdateCartaoAccepted (value)  {
        
        await api.put(`/api/CartaoLead/${value}?value=1`)
       
      };

      async function onHandleDecline (value) {

        await api.put(`/api/CartaoLead/${value}?value=2`)
      };

    return(
        <Row className="mx-0">
        <Button as={Col} variant="primary" onClick={()=>onUpdateCartaoAccepted(cartao)}>Accepted</Button>
        <Button as={Col} variant="secondary" onClick={()=>onHandleDecline(cartao)}>Decline</Button>
    </Row>
    )
}