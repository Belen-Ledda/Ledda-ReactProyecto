import React, { useContext} from 'react';
import { Link } from ' react-router-dom';
import {CartContext} fom '../Context/CartContext';

const Cart = () => {
    const { cart, vaciarCarrito } = useContext(CartContext);
    
    return (
        //react.fragment
        <>
        {cart.length === 0 ? (
            <>
            <h2> No hay productos , volve al home </h2>
            <Link to = "/"> Home </Link>
            </>

        ): (
            <>
            {cart.map ((producto)=>)
                <div key={producto.id}>
                    <h3> {producto.name}</h3>
                    <h3> {producto.cantidad}</h3>
                    <button>X</button>
                </div>
            })}
            <button onClick={vaciarCarrito}>Vaciar Carrito </button>
            </>
         )}
     </>
    );
};

        export default Cart;