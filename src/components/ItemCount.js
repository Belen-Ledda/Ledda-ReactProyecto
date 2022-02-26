
import { useState } from 'react';

import './ItemCount.css';







export default function ItemCount({ stock, initial , onAdd }) {
    const [itemCounter, setItemCounter] = useState(initial);


    function sumar() {
        if (itemCounter < stock) {
        setItemCounter(itemCounter + 1);
        }
    }

    function restar() {
        if (itemCounter > 0) {
        setItemCounter(itemCounter - 1);
        }
    }

    function addToCart() {
        onAdd(itemCounter);
    }

    return (
        <div className='container-item'>
            <div className='Container-espacio'>
                <button type="button" class="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" onClick={restar}>-</button>
                <p>{itemCounter}</p>
                <button type="button" class="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" onClick={sumar}>+</button>
            </div>
            <button className='add-to-cart-button' type="button" class="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" onClick={addToCart}>Agregar al carrito</button>
        </div>
    );

}


