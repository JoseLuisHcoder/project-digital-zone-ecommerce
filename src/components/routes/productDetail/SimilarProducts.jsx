import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CardSimilarProduct from './CardSimilarProduct'
import { useNavigate } from 'react-router-dom'


const SimilarProducts = ({categoryId}) => {
    const [categories, setCategories] = useState()
    

    useEffect(() => {
        const url = `https://e-commerce-api-v2.academlo.tech/api/v1/products?title=${categoryId}`
          axios.get(url)
            .then(res => setCategories(res.data))
            .catch(err => console.log(err))
       }, [categoryId])
console.log(categories)

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
//     useEffect(() => {
//         if(categories && productInfoCategory){
//             const filtro = categories.filter(category => category.name === productInfoCategory)[0].id
//             setIdCategory(filtro)
//         }
//     }, [categories, productInfoCategory])
// console.log(idCategory);
  return (
    <div>
      <h2>Similar Products</h2>
      <div className='home__container__card'>

        {
            categories?.map(product => (
            <CardSimilarProduct product={product} key={product.id}/>
            ))
        }
      </div>
    </div>
  )
}

export default SimilarProducts
