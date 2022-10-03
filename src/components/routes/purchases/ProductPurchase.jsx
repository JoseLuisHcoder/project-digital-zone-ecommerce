import React from 'react'

const ProductPurchase = ({product}) => {
  return (
    <li className='detail__pur'>
        <h4 className='detail__pur__title'>{product.title}</h4>
        <span className='detail__pur__quantity'>{product.productsInCart.quantity}</span>
        <span className='detail__pur__price'>$ {product.price}</span>
    </li>
  ) 
}

export default ProductPurchase