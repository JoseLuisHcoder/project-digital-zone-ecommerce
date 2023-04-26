import React from 'react'
import { useDispatch } from 'react-redux'
import { ascendingOrderProducts, descendingOrderProducts } from '../../store/slices/product.slice'
import "./styles/toOrderProducts.css" 


const ToOrderProducts = () => {

 const dispatch = useDispatch()

 const handleAscending = () => {
    dispatch(ascendingOrderProducts())
 }

 const handleDescending = () => {
    dispatch(descendingOrderProducts())
 }

  return (
    <div className = 'filter__orderProducts-container'>
        <button className = 'filter__price-form-btn' onClick = {handleAscending}>Ascending Order</button>
        <button className = 'filter__price-form-btn' onClick = {handleDescending}>Descending Order</button>
    </div>
  )
}

export default ToOrderProducts