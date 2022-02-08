const products = [
    { 
        id: 1, 
        title: 'Remera inteligente',
        description: 'Alivia dolores de espalda y estas canchero a la vez ',
        price: '1200',
        pictureUrl: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.infobae.com%2Famerica%2Ftecno%2F2020%2F01%2F21%2Fcomo-es-la-camiseta-inteligente-para-aliviar-los-dolores-de-espalda%2F&psig=AOvVaw3lw-HIqaxpkd_14tIkJigS&ust=1644368040954000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCKDHwbny7vUCFQAAAAAdAAAAABAO',
    },
    { 
        id: 2, 
        title: 'Reloj inteligente',
        description: 'Tene todos tus dispositivos conectados desde un solo dispositivo practico.',
        price: '1500',
        pictureUrl: 'https://static.americadigital.com/wp-content/uploads/2020/06/america-digital-relojes-inteligentes-para-detectar-el-coronavirus-unsplash-1140x570.jpg',
    },
    { 
        id: 3, 
        title: 'Camisa que no se mancha ',
        description: 'Sos de los que se le cae siempre el cafe y esta todo sucio por la vida , es tu solucion! ',
        price: '1000',
        pictureUrl: 'https://img.menzig.style/a/0000/352-h0.jpg',
    },
];






const promesa = new Promise (function (resolve, reject) {
    setTimeout(function () {
        resolve(products);
}, 2000)
});


function getProducts(){
    return promesa;

}


export{
    getProducts,
}
