import React, { useState } from 'react'
import { useEffect } from 'react'
import ProductCartInfo from '../../cart/ProductCartInfo'
import axios from 'axios'
import getConfig from '../../../../utils/getConfig'
const Cart = () => {
    const [cartProducts, setCartProducts] = useState()
    const [totalPrice, setTotalPrice] = useState()
 
    const getAllProductsCart = () => {
        
        const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/cart'
        axios.get(URL, getConfig())
            .then(res => {
                const products = res.data.data.cart.products
                setCartProducts(products)

                const total = products.reduce((acc, cv) => {
                    return Number(cv.price) * cv.productsInCart.quantity + acc
                }, 0)
                setTotalPrice(total)
                console.log(totalPrice);
            } )
            .catch(err => setCartProducts())
    }

    useEffect(() => {
        getAllProductsCart()
    }, [])
    // console.log(cartProducts);

    const handleCheckout = () => {

        const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/purchases'
        const obj = {
                street: "Tarija",
                colony: "lati",
                zipCode: 12345,
                city: "USA",
                references: "Some references"
            }
        axios.post(URL, obj, getConfig())
            .then(res => {
                // console.log(res.data)
                getAllProductsCart()
                setTotalPrice(0)
            } )
            .catch(err => console.log(err))    
    }
  return (
    <section>
        <h2>Cart</h2>
        <div>
            {
                cartProducts?.map(product => (
                    <ProductCartInfo 
                    getAllProductsCart={getAllProductsCart}
                    key={product.id}
                    product={product}
                    />
                ))
            }
        </div>
        <hr />
        <footer>
            <span>Total: </span>
            <p>{totalPrice}</p>
            <button onClick={handleCheckout}>Checkout</button>
        </footer>

    </section>
  )
}

export default Cart