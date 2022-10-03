import React from 'react'

const PriceFilter = ({setObjFilterPrice}) => {
const submit = e => {
    e.preventDefault()
    const obj = {
        from: Number(e.target.fromPrice.value),
        to: Number(e.target.toPrice.value)
    }
    setObjFilterPrice(obj)
console.log(obj);
}

    return (
        <form className='price_filter' onSubmit={submit}>
            <h3>Price</h3>
            <ul>
                <li>
                    <label htmlFor="fromPrice">from</label>
                    <input type="number" id="fromPrice" />
                </li>
                <li>
                    <label htmlFor="toPrice">To</label>
                    <input type="number" id="toPrice" />
                </li>
            </ul>
            <button>Filter Price</button>
        </form>
    )
}

export default PriceFilter