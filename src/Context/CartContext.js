import { createContext,useState } from 'react';

export const CartContext = createContext ([]);

const CartContextProvider = ({ children}) => {
    const [cart, setCart]= useState ([]);

    //items al carrito
    const addToCart = (cantidad, products) => {
        if(isOnCart(products.id)) {
                //sumar
                sumarCantidad (cantidad, products)
        }else {
            setCart([...cart, { ...products, cantidad }]);
        }
    };

    //fijarse si esta en el carrito

    const isOnCart = (id) =>{
        const respuesta = cart.some ((prod) => prod.id === id);
        return respuesta;
    };

//sumar la cantidad 
    const sumarCantidad = (cantidad, products) => {
        const copia = [...cart]
        copia.forEach((producto)=> {
            if (producto.id === products.id){
                producto.cantidad += cantidad
            }
        });
    };

    // vaciar carrito

    const vaciarCarrito = () => {
        setCart ([]);
    };

    //eliminar por item
    //sumar total deel carrito (precio * cantidad)

    //sumar cant de unidades del carrito

    return (
        <CartContext.provider value= {{ cart, addToCart, vaciarCarrito }}>
            {children}
        </CartContext.provider>
    );

};
export default CartContextProvider;