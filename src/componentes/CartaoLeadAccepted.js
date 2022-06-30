import { Button, Row, Col, Card, Nav } from 'react-bootstrap';

export const CartaoLeadAccepted = ({ cartao }) => {
    return (
        <Row>
            <Col>
                <Card>
                    <Card.Body>
                        <Card.Title>{cartao.firstName} </Card.Title>
                        | {cartao.dateCreated}
                        <hr />
                        <Card.Text>
                              {cartao.suburb} | {cartao.category}
                        </Card.Text>                       

                        <hr />
                        <Card.Text>
                            {cartao.phoneNumber}
                        </Card.Text>

                        <Card.Text>
                            {cartao.contactEmail}
                        </Card.Text>
                        
                        <Card.Text>
                            {cartao.price}
                        </Card.Text>

                        <Card.Text>
                            {cartao.description}
                        </Card.Text>


                    </Card.Body>
                </Card>
            </Col>
        </Row>
    )
}