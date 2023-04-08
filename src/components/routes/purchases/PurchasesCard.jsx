import ProductPurchase from './ProductPurchase';
import './style/purchasesCard.css'

const PurchasesCard = ({purchase}) => {
    // console.log(purchase);
  return (
    <article className='purchase__card'>
        <h3 className='purchase__date'>{purchase.createdAt}</h3>
        <ul className='purchases__products'>
            <li className='detail__pur'>
            <h4 className='detail__pur__title'>{purchase.product.title}</h4>
            <span className='detail__pur__quantity'>{purchase.quantity}</span>
            <span className='detail__pur__price'>$ {purchase.product.price}</span>
          </li>
        </ul>
    </article>
    
  )
}

export default PurchasesCard