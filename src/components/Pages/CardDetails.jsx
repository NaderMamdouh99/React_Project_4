import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { Bounce } from 'react-reveal';

const CardDetails = (props) => {
    // TODO: useParams Hooks for Get id Component
    const params = useParams()
    // TODO: Get Data from Context Store
    // const { products } = useContext(Products)
    // TODO: TO Get Data from ReduxToolKit Store
    const { products } = useSelector((state) => state.ProductSlice);

    const [product, setproducts] = useState([])
    // TODO: UseNavigation Hooks for navigation Home Page
    const Navigate = useNavigate();
    //TODO: UseEffect Hooks for rendering Components for any change
    useEffect(() => {
        setproducts(products.find((product) => product.id == params.id))
    }, [])


    return (
        <div className="card" >
            <Bounce left>
                <img src={product.image} className="card-img-top my-3" style={{ height: "15em", objectFit: "contain" }} alt="..." />
            </Bounce>
            <div className="card-body">
                <h5 className="card-title">Title: {product.title}</h5>
                <p className="card-text">Description: {product.description}</p>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">Category: {product.category}</li>
                <li className="list-group-item">Price: {product.price} $</li>
            </ul>
            <div className="card-body">
                <Bounce right>
                    <a onClick={() => {
                        Navigate('/');
                    }} className="btn btn-dark">Go Back</a>
                </Bounce>
            </div>
        </div>
    )
}

export default CardDetails;