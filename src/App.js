
import './App.css';
import {  Routes , Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
  return (
  <>
    {/*el navbar va a quedar fijo */}
        <div className="App">
          <NavBar />
        </div>

    {/*los componentes van a ir variando aca */}
        <div>
        <Routes>
          <Route 
            path="/" 
            elements={<ItemListContainer greeting= "Bienvenides a la tienda"/>}
            />
            <Route
              path="/category/:categoryName"
              elements={<ItemListContainer greeting= "Category selections"/>}
            />

            
            <Route
              path="/producto/:productId" 
              elements={<ItemDetailContainer />}
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
</>
  );
}


export default App;



