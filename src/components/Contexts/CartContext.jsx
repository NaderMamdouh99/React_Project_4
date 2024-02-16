import React, { createContext, useState } from 'react'

export const CartContext = createContext(null);

export const CartContextProvider = ({ children }) => {
    const [count, setCount] = useState(0)
    return (
        <>
            <CartContext.Provider value={{ count, setCount }}>
                {children}
            </CartContext.Provider>
        </>
    )
}


