import './ItemDetailContainer.css';
import { useState, useEffect} from 'react';
import { getProducts } from '../api/api';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';



export default function ItemDetailContainer() {

  const [product, setProduct] = useState();
  const { productId } = useParams();
    
    
        useEffect(() => {

      getProducts().then((items) => {
        const productId = items.find((i) => i.id === Number(productId));
        setProduct( product);
      }) 
  
    },[productId]);

    
  
    return (
      <div className='item-detalle'>
        {!product ? <p>Cargando...</p> :  <ItemDetail product={product} />}
      </div>
    );
  

}
