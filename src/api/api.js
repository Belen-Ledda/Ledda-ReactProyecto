const products = [
    { 
        id: 1, 
        title: 'Remera inteligente',
        description: 'Alivia dolores de espalda y estas canchero a la vez ',
        price: '1200',
        pictureUrl: 'https://arc-anglerfish-arc2-prod-infobae.s3.amazonaws.com/public/BZITP7BCEVATHCXBMB27GMZVLE.jpg',
        category: 'ropa',
    },
    { 
        id: 2, 
        title: 'Reloj inteligente',
        description: 'Tene todos tus dispositivos conectados desde un solo dispositivo practico.',
        price: '1500',
        pictureUrl: 'https://static.americadigital.com/wp-content/uploads/2020/06/america-digital-relojes-inteligentes-para-detectar-el-coronavirus-unsplash-1140x570.jpg',
        category:'accesorios',
    },
    { 
        id: 3, 
        title: 'Camisa que no se mancha ',
        description: 'Sos de los que se le cae siempre el cafe y esta todo sucio por la vida , es tu solucion! ',
        price: '1000',
        pictureUrl: 'https://img.menzig.style/a/0000/352-h0.jpg',
        category:'calzado,'
    },
];






const promesa = new Promise (function (resolve, reject) {
    setTimeout(function () {
        resolve(products);
}, 500)
});


function getProducts(){
    return promesa;

}


export{
    getProducts,
}
