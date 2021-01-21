import React from 'react';
import { Container, Row, Col, Button, Card} from 'react-bootstrap';

const Cart = (props) => {

  return (
    <div>
      <Card>
        <Card.Body>
          <Card.Title>{props.customer?.name}</Card.Title>
          <Card.Img src={props.video?.image_url} />
          <Card.Text>{props.video?.title}</Card.Text>
          <Button variant='primary' onClick={()=> props.onClickCheckout(props.customer,props.video)} >checkout</Button>
        </Card.Body>
      </Card>
    </div>
    
  )
};

export default Cart;