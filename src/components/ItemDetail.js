
import './ItemDetail.css';


export default function ItemDetail({ product }) {
  return (
    <div className='item-detail'>
      <img src={product.pictureUrl} alt="Imagen del producto" />
      <div className='right-column'>
        <div className='details'>
          <h1>{product.title}</h1>
          <p className='price'>$ {product.price}</p>
          <p className='description'>{product.description}</p>
        </div>
        <button>Comprar</button>
      </div>
    </div>
  )
}