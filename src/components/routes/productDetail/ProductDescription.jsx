import React, { useState } from 'react'
import axios from 'axios'
import getConfig from '../../../utils/getConfig'

const ProductDescription = ({productInfo}) => {
  const [counter, setCounter] = useState(1)

  const handlePlus = () => setCounter(counter + 1)
  const handleMinus = () => {
    if(counter - 1 >= 1){
      setCounter(counter - 1)
    }
  }
  const handleAddCart = () => {
    const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/cart'
    const obj = {
      id: productInfo.id,
      quantity: counter
    }
    axios.post(URL, obj, getConfig())
      .then(res => console.log(res.data))
      .catch(err => console.log(err))

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
            <article>
              <h3>Quantity</h3>
              <div>
                <button onClick={handleMinus}>-</button>
                <div>{counter}</div>
                <button onClick={handlePlus}>+</button>
              </div>
            </article>

        </div>
        <button onClick={handleAddCart}>Add to cart</button>

    </section> 
  )
}

export default ProductDescription