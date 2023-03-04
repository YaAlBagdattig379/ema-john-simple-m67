import React from 'react';
import { useNavigate } from 'react-router-dom';
import useCart from '../../Hooks/UseCart';
import useProducts from '../../Hooks/UseProducts';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Orders.css';

const Orders = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart();
    const navigate = useNavigate();
    const handleRemoveProduct = product =>{
        const rest = cart.filter(pd => pd._id !== product._id);
        setCart(rest);
        removeFromDb(product._id);
    }

    return (
        <div className='shop-container'>
            <div className="review-items-container">
                {
                    cart.map(product => <ReviewItem
                        key={product._id}
                        product ={product}
                        handleRemoveProduct = {handleRemoveProduct}
                    ></ReviewItem>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                        <br />
                        <button onClick={()=>navigate('/shipment')} style={{fontSize:'14px'}}> Proceed Shipping </button>
                </Cart>
            </div>
        </div>
    );
};

export default Orders;