import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CartProduct from '../components/Cart/CartProduct'
import { getUserCart } from '../store/slices/cart.slice'
import getConfig from '../utils/getConfig'
import "./styles/cart.css"

const Cart = () => {

  const dispatch = useDispatch()

  const  cartProducts = useSelector(state => state.cart)

  useEffect(() => {
    dispatch(getUserCart())
  }, [])

  const handleCheckout = () => {

    const data = {
        street: "Green St. 1456",
        colony: "Southwest",
        zipCode: 12345,
        city: "USA",
        references: "Some references"   
    }

    axios.post(`https://e-commerce-api.academlo.tech/api/v1/purchases`, data, getConfig())
        .then(res => {
            console.log(res.data)
            dispatch(getUserCart())
        })
        .catch(err => console.log(err))
  }

  return (
    <section className = 'cart-container'>
        <h2 className = 'cart__title'>Cart</h2>
        <div className = 'cart__products-container'>
        {
            cartProducts?.map(product => (
                <CartProduct
                    key = {product.id}
                    product = {product}
                />
            ))
        }   
        </div>
        <div className = 'cart__line'></div>
        <footer className = 'cart__footer'>
            <span className = 'cart__footer-title'>Total:</span>
            <p className = 'cart__footer-value'>{
                cartProducts ?
                    cartProducts.reduce((acc, cv) => {
                        return cv.price * cv.productsInCart.quantity + acc
                    }, 0)
                :
                0
                }</p>
        </footer>
        <div className = 'cart__btn-container'>
            <button className = 'cart__btn' onClick={handleCheckout}>Checkout</button>
        </div>
    </section>
  )
}

export default Cart