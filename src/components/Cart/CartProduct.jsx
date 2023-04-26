import axios from 'axios'
import React from 'react'
import { useDispatch } from 'react-redux'
import { getUserCart } from '../../store/slices/cart.slice'
import getConfig from '../../utils/getConfig'
import './style/cartProduct.css'


const CartProduct = ({product}) => {

  const dispatch = useDispatch()

  const handleDelete = () => {
    const URL = `https://e-commerce-api.academlo.tech/api/v1/cart/${product.id}`
    axios.delete(URL, getConfig())
      .then(res => {
        console.log(res.data)
        dispatch(getUserCart())
      })
      .catch(err => console.log(err))
  }

  return (
    <article className = 'cart-product'>
        <header className = 'cart-product__header'>
            <h4 className = 'cart-product__header-brand'>{product.brand}</h4>
            <button className = 'cart-product__header-btn' onClick = {handleDelete}>
                <i className="fa-regular fa-trash-can"></i>
            </button>
        </header>
        
        <h3 className = 'cart-product__title'>{product.title}</h3>
        
        <div className = 'cart-product__quantity'>{product.productsInCart.quantity}</div>
        
        <div className = 'cart-product__div'>
            <p className = 'cart-product__div-unit'>Unit Price:</p>
            <span className = 'cart-product__div-price'>{product.price}</span>
        </div>
    </article>
  )
}

export default CartProduct