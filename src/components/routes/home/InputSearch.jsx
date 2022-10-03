import React from 'react'
import './style/inputSearch.css'

const InputSearch = ({setInputSearch}) => {
  
    const handleChange = e => {
        // console.log(e.target.value)
        setInputSearch(e.target.value.trim())

    }

    return (
    <form className='form_input'>
        <div className='search'>
            <input id='input__s' className='input__s' placeholder='Enter your search' onChange={handleChange} type="text" />
            <button className='input__btn'><i className='bx bx-search-alt-2'></i></button>
        </div>
    </form>
  )
}

export default InputSearch