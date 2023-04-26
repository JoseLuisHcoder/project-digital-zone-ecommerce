import axios from 'axios'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getUserCart } from '../../store/slices/cart.slice'
import getConfig from '../../utils/getConfig'
import "./styles/cardProduct.css"

const CardProduct = ({product}) => {

  const cart = useSelector(state => state.cart)

  const navigate = useNavigate()

  const dispatch = useDispatch()

  const handleClick = () =>{
    navigate(`/product/${product.id}`)
  }

  const handleBtnClick = e => {
    e.stopPropagation()
    const URL = `https://e-commerce-api.academlo.tech/api/v1/cart`

    const data = {
      id: product.id,
      quantity: 1
    }

    axios.post(URL, data, getConfig())
      .then(res => {
        console.log(res.data)
        dispatch(getUserCart()) 
      })
      .catch(err => {
        if (err.response.status === 400) {
          //update
          const URLPatch = `https://e-commerce-api.academlo.tech/api/v1/cart`
          const prevQuantity = cart.filter(e => e.id === product.id)[0].productsInCart.quantity
          const data = {
            id: product.id,
            newQuantity: prevQuantity + 1
          }
          axios.patch(URLPatch, data, getConfig())
            .then(res => {
              dispatch(getConfig())
              console.log(res.data)})
            .catch(err => console.log(err))
        }
      })
  }

  return (
    <article className='product' onClick={handleClick}>
        <header className='product__header'>
            <img className='product__img' src = {product.productImgs[0]} alt="" />
            <img className='product__img' src = {product.productImgs[1]} alt="" />
        </header>
        <section className='product__body'>
            <h3 className='product__name'>{product.title}</h3>
            <article className='product__price-container'>
                <span className='product__price-label'>Price</span>
                <h4 className='product__price-number'>{product.price}</h4>
            </article>
            <button onClick={handleBtnClick} className='product__btn'><i className = "fa-solid fa-cart-plus"></i></button>
        </section>
    </article>
  )
}

export default CardProduct