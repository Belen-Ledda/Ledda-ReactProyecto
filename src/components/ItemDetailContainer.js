import './ItemDetailContainer.css';
import { useEffect} from 'react';
import { getItem} from '../api/api';
import ItemDetail from './ItemDetail';


export default function ItemDetailContainer() {
    
    
        useEffect(() => {
      getItems().then((items) => {
        const products = items.find((i) => i.id === Number(productId));
        setProduct( product);
      })
      })
  
    },[productId]);
  
    return (
      <div className='item-detalle'>
        {!item ? <p>Cargando...</p> :  <ItemDetail item={item} />}
      </div>
    )
  }
 