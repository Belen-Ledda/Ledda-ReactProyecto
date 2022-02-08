import './item.css';

export default function Item({item}) {
    return(
        <div>
            <img src={item.pictureUrl} alt="Imagen del item" />
            <p className='price'>{item.price}</p>
            <p className='title'>{item.title}</p>
        </div>
        )

}