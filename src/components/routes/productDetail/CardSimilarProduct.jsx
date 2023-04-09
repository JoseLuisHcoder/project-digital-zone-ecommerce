import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import getConfig from '../../../utils/getConfig'
import './style/productDescription.css'

const CardSimilarProduct = ({product}) => {
  const navigate = useNavigate()
  const handleClick = () => {
      navigate(`/product/${product.id}`)
  }

  const handleAddCart = e => {
    e.stopPropagation()
    const URL = 'https://e-commerce-api-v2.academlo.tech/api/v1/cart'
    const obj = {
        productId: product.id,
        quantity: 1
    }

    axios.post(URL, obj, getConfig())
        .then(res => console.log(res.data))
        .catch(err => console.log(err))
}   
  return (
   

            <article  className='card__home'>
            <header onClick={handleClick} className='card__home__header'>
                <img className='card__home__img__back' src={product.images[1].url} alt="" />
                
                <img className='card__home__img' src={product.images[0].url} alt="" />
            </header>
            <div className='card__home__body'>
                <h2 className='card__home__title'>{product.title}</h2>
                <section className='card__home__price__container'>
                    <h3 className='card__home__price__label'>Price</h3>
                    <span className='card__home__price__number'>$ {product.price}</span>
                </section>
                <button onClick={handleAddCart} className='card__home__btn'><i className='bx bx-cart-add'></i></button>
            </div>
        </article>
    
  )
}

export default CardSimilarProduct
