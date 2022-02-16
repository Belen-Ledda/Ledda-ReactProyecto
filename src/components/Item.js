import './item.css';

import {Link} from 'react-router-dom';


export default function Item({item}) {
    return(
        <div className='item-container'>   
        <Link to={'/producto/${products.id}'}>
            <img src={item.pictureUrl} alt="Imagen del item" width="30%" height="auto"/>
            <div className='detalle-container'>
                <p className='price ' className="font-bold text-xl mb-2 "> ${item.price}</p>
                <p className='title' className="text-white-700 text-base">{item.title}</p>
            </div>
        </Link>
        </div>
        
        )

}