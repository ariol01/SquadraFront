import { Button, Row, Col, Card, Nav } from 'react-bootstrap';
import { BotaoCartaoLead } from './BotaoCartaoLead';

export const CartaoLead = ({ cartao }) => {
    return (
        <Row>
            <Col>
                <Card Classname="Cartao">
                    <Card.Body>
                    <Card.Header></Card.Header>
                        <Card.Title>{cartao.fullName}</Card.Title>
                        <hr />
                        <Card.Text>
                            {cartao.suburb} | {cartao.category}

                        </Card.Text>

                        <Card.Text>
                            {cartao.description}
                        </Card.Text>

                        <hr />

                            <BotaoCartaoLead cartao={cartao}/>

                            <p>{cartao.price}</p>

                    </Card.Body>
                </Card>
            </Col>
        </Row>
    )
}