
import './ItemDetail.css';


import React,{ useState} from 'react';
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount';

export default function ItemDetail({ product }) {
  const [itemCountCheckout, setItemCountCheckout] = useState(false);

  function onAddItem(newItemCount){
    setItemCountCheckout(newItemCount);

  }


  return (
    <div className='item-detail'>
       <img src={product.pictureUrl} alt="Imagen del producto" />
      <div className='right-column'>
        <div className='details'>
          <h1>{product.title}</h1>
          <p className='price'>$ {product.price}</p>
          <p className='description'>{product.description}</p>
        </div>

        {
          !itemCountCheckout ?
          <ItemCount stock={5} initial={1} onAdd={onAddItem} /> :
          <Link to ="/cart"> IR AL CARRITO</Link>


        }

      </div>
    </div>
  );
};

