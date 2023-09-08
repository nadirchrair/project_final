import React from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import { deletefromCart } from '../slice/cart_slice';

const Cart = () => {
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    return (
        <div style={{ marginTop: '150px' }}>
            <Button variant="outline-danger" className="d-flex" >CLear all</Button>
            <Table striped bordered hover style={{ marginTop: '15px' }}>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Name Produit</th>
                        <th>QNT</th>
                        <th>  price</th>
                        <th> total price</th>

                        <th>action</th>
                    </tr>
                </thead>
                <tbody>

                    {cart.map((item) => {
                        return (
                            <tr>
                                <td>{item.id}</td>
                                <td>{item.title}</td>
                                <td>{item.qunatity}</td>
                                <td>{item.price}</td>
                                <td>{item.price * item.qunatity}</td>
                                <td>
                                    <Button variant="outline-danger" className="d-flex" onClick={() => dispatch(deletefromCart(item))}>DELETE</Button>
                                </td>
                            </tr>
                        )
                    })}

                </tbody>
            </Table>
        </div>
    )
}

export default Cart