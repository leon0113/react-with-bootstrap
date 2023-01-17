import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const Card2 = (props) => {
    const {name,price} = props.product;
    return (
        <div>
            <Row xs={1} md={2} className="g-4">
      {Array.from({ length: 4 }).map((_, idx) => (
        <Col>
          <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>{name}</Card.Title>
              <Card.Text>
                {price}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
        </div>
    );
};

export default Card2;