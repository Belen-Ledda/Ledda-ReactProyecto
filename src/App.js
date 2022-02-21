
import './App.css';
import {  routes , route } from 'react-router-dom';
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
        <routes>
          <route 
            path="/" 
            elements={<ItemListContainer greeting= "Bienvenides a la tienda"/>}
            />
            <route
              path="/category/:categoryName"
              elements={<ItemListContainer greeting= "Category selections"/>}
            />

            
            <route
              path="/producto/:productId" 
              elements={<ItemDetailContainer />}
            />
            <route
              path="*"
              element={ 
              <div>
                <h2>pagina no encontrada</h2>
                <link to="/">{'<<'} VOLVER AL INICIO</link>
              </div>
              }
            />

          </routes>
        </div>
</>
  );
}


export default App;



