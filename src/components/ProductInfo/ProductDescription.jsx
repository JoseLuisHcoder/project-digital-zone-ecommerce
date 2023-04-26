import axios from 'axios'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getUserCart } from '../../store/slices/cart.slice'
import getConfig from '../../utils/getConfig'
import "./styles/productDescription.css"

const ProductDescription = ({product}) => {

    const [counter, setCounter] = useState(1)

    const handlePlus = () => {
        setCounter(counter + 1)
    }

    const handleMinus = () => {
        if(counter - 1 > 0){
            setCounter(counter - 1)
        }
    }

    const dispatch = useDispatch()

    const handleCart = () => {

        const URL = `https://e-commerce-api.academlo.tech/api/v1/cart`
        const data = {
            id: product.id,
            quantity: counter
        }
        
        axios.post(URL, data, getConfig())
            .then(res => {
                console.log(res.data)
                dispatch(getUserCart())
            })
            .catch(err => {
                
                if (err.response.status === 400) {
                    const URLPatch = `https://e-commerce-api.academlo.tech/api/v1/cart`
                    
                    const prevQuantity = cart.filter(e => e.id === product.id)[0].productsInCart.quantity
                    
                    const data = {
                        id: product.id,
                        newQuantity: prevQuantity + 1
                    }
                    axios.patch(URLPatch, data, getConfig())
                        .then(res => {
                            console.log(res.data)
                            dispatch(getUserCart())
                        })
                        .catch(err => console.log(err))
                }
            })
    }

  return (
    <article className = 'productDescription-container'>
        <h2 className = 'productDescription__title'>{product?.title}</h2>

        <section className = 'productDescription__section'>
            <section className = 'productDescription__section1'>
                <div className = 'productDescription__section-price'>Price</div>
                <h3 className = 'productDescription__section-value'>{product?.price}</h3>
            </section>
            <section className = 'productDescription__section2'>
                <h3 className = 'productDescription__section-quantity'>Quantity</h3>
                <div className = 'productDescription__section-counter'>
                    <div className = 'productDescription__section-counter-minus' onClick={handleMinus}>-</div>
                    <div className = 'productDescription__section-counter-value'>{counter}</div>
                    <div className = 'productDescription__section-counter-plus' onClick={handlePlus}>+</div>
                </div>
            </section>
        </section>

        <button className = 'productDescription__btn' onClick={handleCart}>Add to Cart <i className = "fa-solid fa-cart-plus"></i></button>
        <p className = 'productDescription__description'>{product?.description}</p>
    </article>
  )
}

export default ProductDescription