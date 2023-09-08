import React from 'react'
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchproduct } from '../slice/produit_action';
import { Link } from 'react-router-dom';
import { addTocart } from '../slice/cart_slice';
const Index = () => {
    //  const products = useSelector((state) => state.product)
    //const dispatch = useDispatch();
    const produit = useSelector((state) => state.product)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchproduct());
    }, [dispatch]);
    return (
        <div style={{ marginTop: '80px', marginLeft: '150px' }}>

            <ButtonGroup aria-label="Basic example">
                <Button variant="secondary" style={{ marginRight: '20px' }}>Left</Button>
                <Button variant="secondary" style={{ marginRight: '20px' }}>Middle</Button>
                <Button variant="secondary" style={{ marginRight: '20px' }}>Right</Button>
            </ButtonGroup>

            <Row>


                {produit.map((item) => {
                    return (
                        <Card style={{ width: '25rem', marginTop: '70px' }}>
                            <Card.Img variant="top" style={{ maxHeight: '120px', maxWidth: '130px' }} src={item.image} />
                            <Card.Body>
                                <Link to={`/produit/${item.id}`}>{item.title}</Link>
                                <Card.Text>
                                    {item.price}
                                </Card.Text>
                                <Button variant="primary" onClick={() => dispatch(addTocart(item))}>Add to cart</Button>
                            </Card.Body>
                        </Card>

                    )
                })}




            </Row>

        </div >
    )
}

export default Index