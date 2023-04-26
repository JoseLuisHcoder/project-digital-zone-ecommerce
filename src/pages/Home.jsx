import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import CardProduct from '../components/Home/CardProduct'
import FilterCategory from '../components/Home/FilterCategory'
import FilterPrice from '../components/Home/FilterPrice'
import ToOrderProducts from '../components/Home/ToOrderProducts'
import './styles/home.css'

const Home = () => {

  const [productsFilter, setProductsFilter] = useState()

  const [inputValue, setInputValue] = useState()

  const [inputPrice, setInputPrice] = useState({
    from: 0,
    to: Infinity
  })

  const [showResults, setShowResults] = useState(false)

  const products = useSelector(state => state.products)

  useEffect(() => {
    if (products) {
      setProductsFilter(products)
    }
  }, [products])

  const handleChange = e => {
    const inputValue = e.target.value.toLowerCase().trim()
    const filter = products?.filter(prod => prod.title.toLowerCase().includes(inputValue))
    setProductsFilter(filter)
    setInputValue(e.target.value)
  }


  const filterCallback = prod => +prod.price >= inputPrice.from && +prod.price <= inputPrice.to  

  return (
    <div className = 'home__container'>
      
      <input placeholder = 'What are you looking for?' className = 'home__searcher-bar' value = {inputValue} onChange = {handleChange} type="text" />
      
      <button onClick = {() => setShowResults(!showResults)} className = "home__filter-btn"><i className='bx bx-filter-alt'></i>Filters</button>

        <div className = {`filter__container ${showResults ? "open" : ""}`} >
          <span className = 'filter__title'>Filters</span>
          <div onClick = {() => setShowResults(false)} className = 'filter__x'>x</div>
          <FilterPrice className = "filter__price" setInputPrice = {setInputPrice}/>
          <FilterCategory setInputValue = {setInputValue}/>
          <ToOrderProducts />
        </div>
      
      <div className='products-container'>
        {
          productsFilter?.filter(filterCallback).length !== 0 ?
            productsFilter?.filter(filterCallback).map(product => (
              <CardProduct
                key = {product.id}
                product ={product}
              />
            ))
          :
          <h1>Not exist products to this filter</h1>
        }
      </div>
    </div>
  )
}

export default Home