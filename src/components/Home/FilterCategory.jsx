import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch} from 'react-redux'
import { getAllProducts } from '../../store/slices/product.slice'
import { getProductsByCategory } from '../../store/slices/product.slice'
import "./styles/filterCategory.css"

const FilterCategory = ({setInputValue}) => {

    const [categories, setCategories ] = useState()
    
    useEffect(() => {
        const URL = `https://e-commerce-api.academlo.tech/api/v1/products/categories`
        axios.get(URL)
        .then(res => setCategories(res.data.data.categories))
        .catch(err => console.log(err))
    }, [])

    const dispatch  = useDispatch()

    const handleClick = id => {
        dispatch(getProductsByCategory(id))
        setInputValue("")
    }

    const handleAllProducts = () => {
        dispatch(getAllProducts())
        setInputValue("")
      }
    

  return (
    <section className = 'filter__category-container'>
        <h3 className = 'filter__category-title'>Categories</h3>
        <div className = 'filter__price-line'></div>

        <ul className = 'filter__category-products'>
            <li className = 'filter__category-products-item' onClick = {handleAllProducts}>All products</li>
            {
                categories?.map(category => (
                    <li className = 'filter__category-products-item' onClick = {() => handleClick(category.id)} key = {category.id}>{category.name}</li>
                ))
            }
        </ul>
    </section>
  )
}

export default FilterCategory