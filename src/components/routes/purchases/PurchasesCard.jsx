import ProductPurchase from './ProductPurchase';
import './style/purchasesCard.css'

const PurchasesCard = ({purchase}) => {
    // console.log(purchase);
  return (
    <article className='purchase__card'>
        <h3 className='purchase__date'>{purchase.createdAt}</h3>
        <ul className='purchases__products'>{
            purchase.cart.products.map(product =>(
                <ProductPurchase key={product.id} 
                product={product} />
            ))
            }
        </ul>
    </article>
    
  )
}

export default PurchasesCard