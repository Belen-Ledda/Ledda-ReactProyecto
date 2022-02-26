
import './App.css';
import {  Routes , Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';

import { CartContext } from './Context/CartContext';
import CartContextProvider from './Context/CartContext';


function App() {
  return (
  <>
    <CartContextProvider>
    {/*el navbar va a quedar fijo */}
        <div className="App">
          <NavBar />
        </div>

    {/*los componentes van a ir variando aca */}
        <div>
        <Routes>
          <Route 
            path="/" 
            element={<ItemListContainer greetings= "Bienvenides a la tienda"/>}
            />
            <Route
              path="/category/:categoryName"
              element={<ItemListContainer greetings= "Category selections"/>}
            />

            
            <Route
              path="/producto/:productId" 
              element={<ItemDetailContainer />}
            />
            <Route
              path="*"
              element={ 
              <div>
                <h2>pagina no encontrada</h2>
                <link to="/">{'<<'} VOLVER AL INICIO</link>
              </div>
              }
            />

          </Routes>
        </div>
    </CartContextProvider>
</>
  );
}


export default App;



