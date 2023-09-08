import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { fetchdetails } from '../slice/produit_action';
import { useEffect } from 'react';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const DetailsProduct = () => {
    const params = useParams();
    const produit = useSelector((state) => state.product);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchdetails(params.id))
    }, [dispatch]);

    return (
        <div >
            <Card style={{ width: '25rem', marginTop: '70px' }}>
                <Card.Img variant="top" style={{ maxHeight: '120px', maxWidth: '130px' }} src={produit.image} />
                <Card.Body>
                    <Card.Text to={`/produit/${produit.id}`}>{produit.title}</Card.Text>
                    <Card.Text>
                        {produit.price}
                    </Card.Text>
                    <Button variant="primary">Add to cart</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default DetailsProduct