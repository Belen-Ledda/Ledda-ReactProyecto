import React from 'react';
import CartWidget from './CartWidget';
import './NavBar.css';
import { NavLink } from 'react-router-dom';


export default function NavBar()  {
    const [menuOpen, setMenuOpen] = React.useState(false);
    return (
    
<nav class="nav-backGround border-gray-200 px-2 sm:px-4 py-2.5 rounded ">
      <div class="container flex flex-wrap justify-between items-center mx-auto">
            <a href="#" class="flex">
              <span class="self-center text-lg font-semibold whitespace-nowrap dark:text-white">Mi Tienda</span>
            </a>
            <div class="flex items-center md:order-2">

                  <div class="hidden z-50 my-4 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600" id="dropdown">
                      
                  </div>
                  <button onClick={() =>{setMenuOpen(!menuOpen)}} data-collapse-toggle="mobile-menu-2" type="button" class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">

                      <span class="sr-only">Open main menu</span>
                      <svg class={`w-6 h-6 ${!menuOpen ? 'hidden':''}`}fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                      <svg class={`w-6 h-6 ${menuOpen ? 'hidden':''}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                  </button>
            </div>
            <div class={`justify-between items-center w-full md:flex md:w-auto md:order-1 ${menuOpen ? 'hidden':''}`} id="mobile-menu-2">
                <ul class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                    <li>
                    <NavLink to="/category/home" class=" nav-link block py-2 pr-4 pl-3 text-black brounded md:bg-transparent  md:p-0" aria-current="page">Home</NavLink></li>
                    
                    <li><NavLink to="/category/accesorios" class="nav-link block py-2 pr-4 pl-3 text-black brounded md:bg-transparent  md:p-0" aria-current="page">Accesorio</NavLink></li>
                    
                    <li><NavLink to="/category/ropa" class="nav-link block py-2 pr-4 pl-3 text-black brounded md:bg-transparent  md:p-0" aria-current="page">Ropa</NavLink></li>

                    <li><NavLink to="/category/calzado" class="nav-link block py-2 pr-4 pl-3 text-black brounded md:bg-transparent  md:p-0" aria-current="page">Calzado</NavLink></li>
                    
                    <li><NavLink to="/category/cartWidget" class="nav-link block py-2 pr-4 pl-3 text-black brounded md:bg-transparent  md:p-0" aria-current="page"><CartWidget/></NavLink></li>
                    
                </ul>
            </div>

      </div>


</nav>

  );
}



