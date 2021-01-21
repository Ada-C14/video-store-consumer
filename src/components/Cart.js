import React from 'react';
import { Container, Row, Col, Image} from 'react-bootstrap';

const Cart = (props) => {

  return (
    <div>
      <Container>
        <Row>{props.customer?.name}</Row>
        <Row>{props.video.title}</Row>
        <Row>{props.video.image_url && <img src={props.video.image_url} alt='movie poster' />}</Row>
        <Row><button onClick={()=> props.onClickCheckout(props.customer,props.video)} >checkout</button></Row>
      </Container>
    </div>
    
  )
};

export default Cart;