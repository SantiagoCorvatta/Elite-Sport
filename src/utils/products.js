import { addDoc, collection, doc, getDoc, getDocs, getFirestore, query, where } from "firebase/firestore";

 export const getAllProducts = () => {
  const database = getFirestore();
  const collectionReference = collection(database, 'items');
  
  return getDocs(collectionReference)
    .then(snapshot => {
      const list = snapshot
        .docs
        .map((doc) => ({
          id: doc.id,
          ...doc.data()
        }));
        console.log(list);
      return list;
    })
    .catch(error => console.warn(error))
};
  
  export const getProduct = (id) => {
    const database = getFirestore();
  const itemReference = doc(database, 'items', id);
  return getDoc(itemReference)
    .then(snapshot => {
      if(snapshot.exists()) {
        const item = {
          id: snapshot.id,
          ...snapshot.data()
        };
        return item;
      }
    })
  
};
 
  export const getProductsByCategory = (categoryId) => {
    const database = getFirestore();
    const collectionReference = collection(database, 'items');
    const collectionQuery = query(collectionReference, where('category', '==', categoryId))
  return getDocs(collectionQuery)
    .then(snapshot => {
      const list = snapshot
        .docs
        .map((doc) => ({
          id: doc.id,
          ...doc.data()
        }));
      return list;
    })
    .catch(error => console.warn(error))
};

const products = [  
  {name: 'Pelota Qatar 2022', category: 'futbol', image: 'https://i.postimg.cc/1zMyg3hn/pelota.jpg' , description: 'Pelota oficial del Mundial Qatar 2022', price: 5999},
  {name: 'Seleccion Argentina', category: 'futbol', image: 'https://i.postimg.cc/zGZz6QFB/argqatar.png', description: 'Camiseta Seleccion Argentina Mundial 2022', price: 14999},
  {name: 'Camiseta Boca Juniors', category: 'futbol', image: 'https://i.postimg.cc/HxSFmJGz/boca.jpg', description: 'Camiseta Boca Juniors 2022', price: 14999},
  {name: 'Los Angeles Lakers', category: 'basquet', image: 'https://i.postimg.cc/zfqJXRMY/lakers.jpg', description: 'Musculosa Basquet LAL', price: 8999},
  {name: 'Seleccion Argentina Hockey', category: 'hockey', image: 'https://i.postimg.cc/W1GNv757/leonas.jpg', description: 'Musculosa "Las Leonas"', price: 9999},
  {name: 'Botines Puma Netfit', category: 'futbol', image: 'https://i.postimg.cc/k44qWPqj/puma.jpg', description: 'Botines Puma Netfit Naranja/Negro', price: 8999},
  {name: 'Camiseta Racing Club', category: 'futbol', image: 'https://i.postimg.cc/DZMFgpz7/racing.jpg', description: 'Camiseta Racing Club de Avellaneda 2022', price: 11999},  
  {name: 'Camiseta Termica Flash', category: 'deportiva', image: 'https://i.postimg.cc/G90R0BYN/termica.jpg', description: 'Camiseta termica Flash, deportiva', price: 8999}
]

export const createAllProducts = async () => {
  try {
    const database = getFirestore(); 
    const collectionReference = collection(database, 'items');
      for(let i = 0; i < products.length; i++) {
        const snapshot = await addDoc(collectionReference, products[i]);
    }
  } catch (error) {
    console.warn(error)
  }
}
 