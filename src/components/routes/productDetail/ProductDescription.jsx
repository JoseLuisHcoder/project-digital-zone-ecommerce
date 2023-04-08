import React, { useState } from 'react'
import axios from 'axios'
import getConfig from '../../../utils/getConfig'
import './style/productDescription.css'

const ProductDescription = ({productInfo}) => {
  const [counter, setCounter] = useState(1)

  const handlePlus = () => setCounter(counter + 1)
  const handleMinus = () => {
    if(counter - 1 >= 1){
      setCounter(counter - 1)
    }
  }
  const handleAddCart = () => {
    const URL = 'https://e-commerce-api-v2.academlo.tech/api/v1/cart'
    const obj = {
      quantity: counter,
      productId: productInfo.id
      
    }
    axios.post(URL, obj, getConfig())
      .then(res => console.log(res.data))
      .catch(err => console.log(err))
console.log(productInfo);
  }
  return (
    <section  className='product__info'>
        <h2 className='product__info__name'>{productInfo?.title}</h2>
        <p className='product__info__description'>{productInfo?.description}</p>
        <div>
            <article>
              <h3>Price</h3>
              <span>{productInfo?.price}</span>
            </article>
            <article className='product__quantity'>
              <h3>Quantity</h3>
              <div className='product__handle'>
                <button className='product__rest' onClick={handleMinus}>-</button>
                <div>{counter}</div>
                <button className='product__add' onClick={handlePlus}>+</button>
              </div>
            </article>

        </div>
        <button className='product__btn' onClick={handleAddCart}>Add to cart</button>

    </section> 
  )
}

export default ProductDescription