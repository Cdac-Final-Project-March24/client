// CartContext.js
import React, { createContext, useState,useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem('cart');
        return savedCart ? JSON.parse(savedCart) : [];
    });

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    const addToCart = (product) => {
        setCart((prevCart) => {
            const existingItemIndex = prevCart.findIndex(item => item.name === product.name && item.productId === product.id);
    
            if (existingItemIndex !== -1) {
                // If the item exists, update the quantity
                return prevCart.map((item, index) =>
                    index === existingItemIndex
                        ? { ...item, Quantity: item.Quantity + 1 }
                        : item
                );
            } else {
                // If the item does not exist, add it with a unique ID
                const item = {
                    id: uuidv4(), // Generate a unique ID
                    productId: product.id, // Original product ID
                    name: product.name,
                    Quantity: 1,
                    pricePayable: `$${product.price.toFixed(2)}`,
                    image: 'https://via.placeholder.com/150', // Replace with actual image URL if available
                };
                return [...prevCart, item];
            }
        });
    };

    const removeFromCart = (id) => {
        setCart((prevCart) => prevCart.filter(item => item.id !== id));
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};


// global cart state management.. 
 