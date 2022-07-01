import { Button, Row, Col, Card, Nav } from 'react-bootstrap';
import Avatar from '@mui/material/Avatar';
import CardHeader from '@mui/material/CardHeader';
import { red } from '@mui/material/colors';
import { MapOutlined, Work, AttachMoney, Email,LocalPhone, Info } from '@mui/icons-material';

export const CartaoLeadAccepted = ({ cartao }) => {
    return (
        <Row>
            <Col>
                <Card>
                    <Card.Body>
                        <CardHeader
                            avatar={
                                <Avatar sx={{ bgcolor: red[500] }} />

                            }
                            title={cartao.firstName}
                            subheader={cartao.dateCreated}
                        />

                        <hr />
                        <Card.Text>
                            <MapOutlined />
                            {cartao.suburb} | <Work /> {cartao.category} | ID: {cartao.id} | <AttachMoney /> {cartao.price}
                        </Card.Text>
                        <hr />

                        <Card.Text>
                           <LocalPhone/> {cartao.phoneNumber}{' '} | <Email/> {cartao.contactEmail}
                        </Card.Text>

                        <Card.Text>
                            <Info/>{cartao.description}
                        </Card.Text>

                    </Card.Body>
                </Card>
            </Col>
        </Row>
    )
}