const products = [
    {id: 1, name: 'Camiseta River Plate 2022', category: 'futbol', image: 'https://i.postimg.cc/Kj3bs7KB/river1ra.jpg', description: 'Nueva Camiseta de River Plate año 2022', price: 14999},
    {id: 2, name: 'Pelota Qatar 2022', category: 'futbol', image: 'https://i.postimg.cc/1zMyg3hn/pelota.jpg' , description: 'Pelota oficial del Mundial Qatar 2022', price: 5999},
    {id: 3, name: 'Seleccion Argentina', category: 'futbol', image: 'https://i.postimg.cc/zGZz6QFB/argqatar.png', description: 'Camiseta Seleccion Argentina Mundial 2022', price: 14999},
    {id: 4, name: 'Camiseta Boca Juniors', category: 'futbol', image: 'https://i.postimg.cc/HxSFmJGz/boca.jpg', description: 'Camiseta Boca Juniors 2022', price: 14999},
    {id: 5, name: 'Los Angeles Lakers', category: 'basquet', image: 'https://i.postimg.cc/zfqJXRMY/lakers.jpg', description: 'Musculosa Basquet LAL', price: 8999},
    {id: 6, name: 'Seleccion Argentina Hockey', category: 'hockey', image: 'https://i.postimg.cc/W1GNv757/leonas.jpg', description: 'Musculosa "Las Leonas"', price: 9999},
    {id: 7, name: 'Botines Puma Netfit', category: 'futbol', image: 'https://i.postimg.cc/k44qWPqj/puma.jpg', description: 'Botines Puma Netfit Naranja/Negro', price: 8999},
    {id: 8, name: 'Camiseta Racing Club', category: 'futbol', image: 'https://i.postimg.cc/DZMFgpz7/racing.jpg', description: 'Camiseta Racing Club de Avellaneda 2022', price: 11999},  
    {id: 9, name: 'Camiseta Termica Flash', category: 'deportiva', image: 'https://i.postimg.cc/G90R0BYN/termica.jpg', description: 'Camiseta termica Flash, deportiva', price: 8999}
  ]

 export const getAllProducts = () => {
    const promise = new Promise ((resolve) => {
        setTimeout(()=>{
          return resolve(products);  
        }, 2000)      
    })

    return promise
  };

  export const getProduct = (id) => {
    const promise = new Promise ((resolve) => {
        const result = products.find((product)=> product.id === parseInt(id))        
        setTimeout(()=>{
          return resolve(result);  
        }, 2000)      
    })

    return promise
  };

  export const getProductsByCategory = (categoryId) => {
    const results = products.filter((product)=> product.category === categoryId);
    const promise = new Promise ((resolve) => {
        setTimeout(()=>{
          return resolve(results);  
        }, 2000)      
    })

    return promise
  };