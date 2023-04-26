import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import CardProduct from '../components/Home/CardProduct'
import ProductDescription from '../components/ProductInfo/ProductDescription'
import SliderImg from '../components/ProductInfo/SliderImg'
import "./styles/productsInfo.css"





const ProductInfo = () => {

  const { id } = useParams()

  const [product, setProduct] = useState()
  const [similarProducts, setSimilarProducts] = useState()

  const allProducts = useSelector(state => state.products)

  useEffect(() => {
    const URL = `https://e-commerce-api.academlo.tech/api/v1/products/${id}`
    axios.get(URL)
      .then(res => setProduct(res.data.data.product))
      .catch(err => console.log(err))
  }, [id])

  useEffect(() => {
    if(allProducts && product){
      const pivot = allProducts.filter(prod => prod.category.name === product.category)
      setSimilarProducts(pivot)
    }
  }, [allProducts, product])

  return (
    <div>
      <div className = 'productInfo-container'>
        <SliderImg listImgs = {product?.productImgs}/>
        <ProductDescription product = {product}/>
      </div>
      <section className = 'similarProducts-container'>
        <h2 className = 'similarProducts__title'>Discover similar items</h2>
        <div className='similarProducts__info'>
          {
            similarProducts?.map(simProd => {
              if(simProd.title !== product.title){
                return (
                <CardProduct
                  key={simProd.id}
                  product = {simProd}
                />
                )
              }
            })
          }
        </div>
      </section>
    </div>
  )
}

export default ProductInfo