const products = [
    {
    id: '1',
    name: 'Barrita de cereal',
    price: 120,
    category: 'barritas',
    img: 'https://i.pinimg.com/564x/62/4d/b7/624db76a3fc88ec8755fad6921bf9387.jpg',
    stock: 25,
    description: 'Sabor Coco'
},
{id: '2',
name: 'Barrita de cereal',
price: 120,
category: 'barritas',
img: 'https://i.pinimg.com/564x/62/4d/b7/624db76a3fc88ec8755fad6921bf9387.jpg',
stock: 25,
description: 'Sabor Cacao'},

{id: '2',
name: 'Desayuno Saludable',
price: 2000,
category: 'desayunos',
img: 'https://lecheunicla.com/wp-content/uploads/Ideas-de-desayunos-faciles-y-saludables.png',
stock: 25,
description: 'A elección'}
]
export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductById = (productId) => {
    return new promise(() => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}