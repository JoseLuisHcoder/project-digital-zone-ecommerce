import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { getAllProducts, getProductByCategory } from '../../../store/slices/products.slice'

const CategoryFilter = () => {
    const [categories, setCategories] = useState()

    useEffect(() => {
        const URL = 'https://e-commerce-api-v2.academlo.tech/api/v1/categories'
        axios.get(URL)
            .then(res => setCategories(res.data))
            .catch(err => console.log(err))
           
    }, [])
// console.log(categories);
    const dispatch = useDispatch()
    const handleClickCategory = nameItem => {
        dispatch(getProductByCategory(nameItem))
    }

    const handleClickAllProducts = () => {
        dispatch(getAllProducts())
    }

  return (
    <div className='category_filter'>
        <h3>Categoy</h3>
            <ul className='category_filter_ul'>
                <li onClick={handleClickAllProducts} >All Products</li>
                {
                    categories?.map(category => (
                        <li className='category_filter_li' onClick={() => handleClickCategory(category.id)} key={category.id}>{category.name}</li>
                    ))
                }
            </ul>
    </div>
  )
}

export default CategoryFilter