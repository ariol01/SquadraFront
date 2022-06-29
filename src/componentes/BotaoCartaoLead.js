import { Button, Row, Col, Card, Nav } from 'react-bootstrap';
import api from '../api/Api'; 

export const BotaoCartaoLead = ({cartao}) => {

    async function onUpdateCartaoAccepted (value)  {
        
        await api.put(`/api/CartaoLead/${value}?value=true`)
       
      };

      async function onHandleDecline (value) {

        await api.put(`/api/CartaoLead/${value}?value=false`)
      };

    return(
        <Row className="mx-0">
        <Button as={Col} variant="primary" onClick={()=>onUpdateCartaoAccepted(cartao)}>Accepted</Button>
        <Button as={Col} variant="secondary" onClick={()=>onHandleDecline(cartao)}>Decline</Button>
    </Row>
    )
}