import { Button, Row, Col, Card, Nav } from 'react-bootstrap';
import { BotaoCartaoLead } from './BotaoCartaoLead';
import Avatar from '@mui/material/Avatar';
import CardHeader from '@mui/material/CardHeader';
import { red } from '@mui/material/colors';
import { MapOutlined, Work } from '@mui/icons-material';


export const CartaoLead = ({ cartao }) => {
    const dataFormatada = new Date(cartao.dateCreated)
     dataFormatada.toLocaleDateString();

    return (
        <Row>
            <Col>
                <Card className="Cartao">
                    <Card.Body>
                    <CardHeader
                            avatar={
                                <Avatar  sx={{ bgcolor: red[500] }} />                                 
                                
                            }
                            title={cartao.firstName}
                            subheader={cartao.dateCreated}
                        />                        
                        <hr />
                        <Card.Text>
                            <MapOutlined/>
                            {cartao.suburb} | <Work/> {cartao.category} | ID: {cartao.id}
                        </Card.Text>
                        <hr />
                        
                        <Card.Text>
                            {cartao.description}
                        </Card.Text>

                        <hr />

                            <BotaoCartaoLead cartao={cartao}/>                    
                    </Card.Body>

                </Card>
            </Col>
        </Row>
    )
}