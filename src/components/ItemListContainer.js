import './ItemListContainer.css';

import ItemCount from './ItemCount';
import { useEffect, useState } from 'react';
import ItemList from './ItemList';
import { getProducts } from '../api/api';
import { useParams } from 'react-router-dom';




export default function ItemListContainer ({ greetings }) {
    const [products,setProducts] = useState([]);
    const { categoryName } = useParams();
    

    
    //cuando se monta el componente , busca los productos.
    useEffect(() => {
 //obtener los productos
getProducts().then((products) => {
            if (!categoryName) {
                setProducts(products);
            } else {
            const itemsPorCategoria = products.filter((producto) => {
                return producto.category === categoryName;

            });
            setProducts(itemsPorCategoria);
                }
            });
            

    }, [ categoryName ]);
    //array de depen.

    

    function onAddItem(itemCount) {
        console.log(itemCount);
    }
    return (
    <div>
        <h1>{greetings}</h1>

        {
            products.length > 0 ?
            <p>Cargando...</p> :
            <ItemList products={products}/> 
        }
        <ItemCount stock={5} initial={1} onAdd={onAddItem} />
    </div>

    );   
    }


