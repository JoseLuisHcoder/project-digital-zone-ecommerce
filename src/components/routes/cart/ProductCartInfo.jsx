import axios from 'axios'
import React from 'react'
import getConfig from '../../../utils/getConfig'

const ProductCartInfo = ({product, getAllProductsCart}) => {
  const handleDelete = () => {
    const URL = `https://ecommerce-api-react.herokuapp.com/api/v1/cart/${product.id}`
    axios.delete(URL, getConfig())
      .then(res => {
        console.log(res.data)
        getAllProductsCart()
      })
      .catch(err => console.log(err))
  }
  return (
    <article className='cart__item'>
        <header className='cart__item__header'>
            <h4 className='cart__category'>{product.brand}</h4>
            <h3 className='cart__name'>{product.title}</h3>
        </header>
              <i onClick={handleDelete} className='bx bx-trash'></i>
        
        <span className='cart_quantity'>{product.productsInCart.quantity}</span>
        <div>
            <span className='cart__total__label'>Total: </span>
            <p className='cart__total_number'>{product.price}</p>
        </div>
    </article>
     
  )
}

export default ProductCartInfo