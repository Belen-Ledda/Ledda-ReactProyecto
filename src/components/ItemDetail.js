
import './ItemDetail.css';


export default function ItemDetail({ products }) {
  return (
    <div className='item-detail'>
      <img src={products.pictureUrl} alt="Imagen del producto" />
      <div className='right-column'>
        <div className='details'>
          <h1>{products.title}</h1>
          <p className='price'>$ {products.price}</p>
          <p className='description'>{products.description}</p>
        </div>
        <button>Comprar</button>
      </div>
    </div>
  )
}