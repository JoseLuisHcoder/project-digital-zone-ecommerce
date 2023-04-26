import React from 'react'
import "./styles/purchaseCard.css"

const PurchaseCard = ({purchase}) => {

    console.log(purchase)

    const datePurchase = new Date(purchase.createdAt)

  return (
    <article className = 'purchaseCard-container'>
        <h3 className = 'purchaseCard__date-title'>{datePurchase.toLocaleDateString()}</h3>
        <div className = 'purchaseCard__date-container'>
        </div>
        <section className = 'purchaseCard__items-container'>
            <ul className = 'purchaseCard__item'>
                {
                    purchase.cart.products.map(prod => (
                        <li className = 'purchaseCard__items' key = {prod.id}>
                            <h4 className = 'purchaseCard__items-title'>{prod.title}</h4>
                            <div className = 'purchaseCard__items-div-principal'>
                                <div className = 'purchaseCard__items-div'>{prod.productsInCart.quantity}</div>
                            </div>
                            <div className = 'purchaseCard__items-quantity'>{prod.price*prod.productsInCart.quantity}</div>
                        </li>
                    ))
                }
            </ul>
        </section>
    </article>
  )
}

export default PurchaseCard