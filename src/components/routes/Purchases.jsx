import React, { useEffect, useState } from 'react'
import axios from 'axios'
import PurchasesCard from './purchases/PurchasesCard'
import getConfig from '../../utils/getConfig'
import './style/purchases.css'

const Purchases = () => {
  
  const [purchases, setPurchases] = useState()
  useEffect(() => {
      const URL = 'https://e-commerce-api-v2.academlo.tech/api/v1/purchases'
      axios.get(URL, getConfig())
          .then(res => setPurchases(res.data))
          .catch(err => console.log(err))
      }, [])
      // console.log(purchases);


  return (
    <div className='purchases'>
      <h2 className='purchases__title'>My purchase</h2>
      <div className='purchases__detail'>
        {
              purchases?.map(purchase => (
                  <PurchasesCard key={purchase.id} purchase= {purchase} />
              ))
          }

      </div>
    </div>
  )
}

export default Purchases