import React, { createContext, useState } from 'react';
import './App.css';
import Cart from './components/Cart';

export const myContext = createContext('');

const App = () => {
    const products = [
        {
            id: 1,
            title: "iPhone 9",
            description: "An apple mobile which is nothing like apple",
            price: 549,
            discountPercentage: 12.96,
            rating: 4.69,
            stock: 94,
            brand: "Apple",
            category: "smartphones",
            thumbnail: 'https://tse3.mm.bing.net/th?id=OIP.nLi2A0Beu5RPL7TTAaH2mQHaHa&pid=Api&P=0&h=180',
            images: ["https://i.dummyjson.com/data/products/1/thumbnail.jpg"]
        },
        {
            id: 2,
            title: "iPhone XR",
            description: "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
            price: 899,
            discountPercentage: 17.94,
            rating: 4.44,
            stock: 34,
            brand: "Apple",
            category: "smartphones",
            thumbnail: 'https://tse4.mm.bing.net/th?id=OIP.wjCKxkLdSMvgIrEc6eZhMwHaHa&pid=Api&P=0&h=180',
            images: ["https://i.dummyjson.com/data/products/2/thumbnail.jpg"]
        },
        {
            id: 3,
            title: "Samsung Universe 9",
            description: "Samsung's new variant which goes beyond Galaxy to the Universe",
            price: 1249,
            discountPercentage: 15.46,
            rating: 4.09,
            stock: 36,
            brand: "Samsung",
            category: "smartphones",
            thumbnail: 'https://tse3.mm.bing.net/th?id=OIP.AndDiJ6byCyHJtg4ZsO2bgHaJN&pid=Api&P=0&h=180',
            images: ["https://i.dummyjson.com/data/products/3/thumbnail.jpg"]
        }
        // Add more products as needed
    ];

    const [data, setData] = useState(products);

    return (
        <div>
            <myContext.Provider value={[data, setData]}>
                <Cart />
            </myContext.Provider>
        </div>
    );
};

export default App;
