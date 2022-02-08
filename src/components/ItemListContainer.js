import './ItemListContainer.css';

import ItemCount from './ItemCount';
import { useEffects, useState } from 'react';
import { getProducts } from '../api/api';
import ItemList from './ItemList';

export default function ItemListContainer ({ greetings }) {
    const [products,setProducts] = useState([]);

    
    //cuando se monta el componente , busca los productos.
    useEffects(() => {


    //obtener los productos

    getProducts().then (function(products) {
        console.log(products);
        setProducts(products);

    });
}, []);
    //array de depen.
    
    

    function onAddItem(itemCount) {
        console.log(itemCount);
    }
    return (
    <div>
        <h1>{greetings}</h1>
        {products.length > 0 ? <ItemList products={products}/> : <p>Cargando...</p>}
        <ItemCount stock={5} initial={1} onAdd={onAddItem} />
    </div>
    )
}