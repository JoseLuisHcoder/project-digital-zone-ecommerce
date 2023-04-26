import React from 'react'
import "./styles/filterPrice.css"

const FilterPrice = ({setInputPrice}) => {

    const handleSubmit = e => {
        e.preventDefault()
        const inputFrom = +e.target.from.value
        const inputTo = +e.target.to.value
        
        if (inputFrom && inputTo) {
            setInputPrice({
                from: inputFrom,
                to: inputTo
            })
        } else if (!inputFrom && inputTo) {
            setInputPrice({
                from: 0,
                to: inputTo
            })
        } else if (inputFrom && !inputTo) {
            setInputPrice({
                from: inputFrom,
                to: Infinity
            })
        } else {
            setInputPrice({
                from: 0,
                to: Infinity
            })
        }
    }

  return (
    <section className = 'filter__price-container'>
        <h2 className = 'filter__price-title'>Price</h2>
        <div className = 'filter__price-line'></div>
        <form className = 'filter__price-form' onSubmit = {handleSubmit}>
            <div className = 'filter__price-form-from'>
                <label className = 'filter__price-form-label' htmlFor="from">From</label>
                <input className = 'filter__price-form-input' min = '0' type="number" id = "from" />
            </div>
            <div className = 'filter__price-form-to'>
                <label className = 'filter__price-form-label' htmlFor="to">To</label>
                <input className = 'filter__price-form-input' min = '0' type="number" id = "to" />
            </div>
            <div className = 'filter__price-btnContainer'>
                <button className = 'filter__price-form-btn'>Filter price</button>
            </div>
        </form>
    </section>
  )
}

export default FilterPrice