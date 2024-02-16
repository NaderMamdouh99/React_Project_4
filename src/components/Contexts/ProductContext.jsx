import { createContext, useState } from "react";


export const Products = createContext(null);

export const ProductContextProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    // useEffect(() => {
    //     fetch('https://fakestoreapi.com/products')
    //         .then(res => res.json())
    //         .then(json => setProducts(json))
    // }, [])
    return (
        <>
            <Products.Provider value={{ products, setProducts }}>
                {children}
            </Products.Provider>
        </>
    )
}