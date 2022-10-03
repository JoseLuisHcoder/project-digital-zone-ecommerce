import React, { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import ProductDescription from './productDetail/ProductDescription'
import './style/productDetail.css'

const classImg = [ '', 'second__img', 'third__img']

const ProductDetail = () => {

  const {id} = useParams()
  const [productInfo, setProductInfo] = useState()
  const [indexClass, setIndexClass] = useState(0)
  useEffect(() => {
    const URL = `https://ecommerce-api-react.herokuapp.com/api/v1/products/${id}`
    axios.get(URL)
      .then(res => setProductInfo(res.data.data.product))
      .catch(err => console.log(err))

  }, [])
  console.log(productInfo);

  
  
  const clickPrev = () => {
    const prevClass = indexClass - 1
    if(prevClass < 0){
      setIndexClass(classImg.length - 1)
    }else {
      setIndexClass(prevClass)
    }
  }

  const clickNext = () => {
    const nextClass = indexClass + 1
    if(nextClass >= classImg.length){
      setIndexClass(0)
    }else{
      setIndexClass(nextClass)
    }
  }
  return (
    <div className='product'>
      <div className='slider'>
        <div onClick={clickPrev} className='slider__prev'>&#60;</div>
        <div  className={`slider__container ${classImg[indexClass]}`}>
          {
            productInfo?.productImgs.map(imgSrc => (
              <img 
              key={imgSrc}
              src={imgSrc}
              alt="" 
              className='slider__imgs'/>
            ))
          }
        </div>
        <div onClick={clickNext} className='slider__next'>&#62;</div>

        <div className='puntos__container'>
            <div onClick={() => setIndexClass(0) } className={ indexClass === 0 ? 'puntos puntos__active' : 'puntos'}></div>
            <div onClick={() => setIndexClass(1) } className={ indexClass === 1 ? 'puntos puntos__active' : 'puntos'}></div>
            <div onClick={() => setIndexClass(2) } className={ indexClass === 2 ? 'puntos puntos__active' : 'puntos'}></div>
        </div>
      </div>
      <ProductDescription productInfo={productInfo}/>
    </div>
  )
}

export default ProductDetail