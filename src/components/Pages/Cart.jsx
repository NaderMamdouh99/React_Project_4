import React, { useEffect, useState } from 'react';
import './Cart.css';
import { Link } from 'react-router-dom';
import { Bounce } from 'react-reveal';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProductFromCart } from '../Redux/slice/ProductSlice';
import { decrement } from '../Redux/slice/CartCount';



const Cart = (props) => {
    // TODO: TO Get Data from ReduxToolKit Store
    const { productinchart } = useSelector((state) => state.ProductSlice)
    const { CartCount } = useSelector((state) => state.Cart)
    const [Products, setProducts] = useState([])

    // TODO: Get Data from Context Store
    // const [productPriceCount, setproductPriceCount] = useState([])


    // TODO: Dispatch Data in ReduxToolKit Store
    const dispatchDeleteProduct = useDispatch()
    const dispatchDeleteCount = useDispatch()

    // TODO: TO  Calculate the Total Price for a products
    let productPriceCount = []
    let TotalPrice = 0;
    productPriceCount = Products.map((prod) => prod.price);
    productPriceCount.map(prod => {
        return TotalPrice += prod;
    })


    // TODO: Use Effect Hooks To Set Product In Array
    useEffect(() => {
        setProducts(productinchart);
        console.log(TotalPrice);
    })

    // TODO: TO Delete the product when do Click 
    const Delete = (id) => {
        dispatchDeleteProduct(deleteProductFromCart(id));
        dispatchDeleteCount(decrement());
        setProducts(productinchart);
    }


    return (
        <section className="h-100 h-custom" style={{ backgroundColor: "#eee" }}>
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col">
                        <div className="card">
                            <div className="card-body p-4">

                                <div className="row">
                                    {/* Continue Shopping */}
                                    <Bounce left>
                                        <div className="col-lg-7">
                                            <h5 className="mb-3"><Link to='/' className="text-body"><i
                                                className="fas fa-long-arrow-alt-left me-2"></i>Continue shopping</Link></h5>
                                            <hr />

                                            <div className="d-flex justify-content-between align-items-center mb-4">
                                                <div>
                                                    <p className="mb-1">Shopping cart</p>
                                                    <p className="mb-0">You have {CartCount} items in your cart</p>
                                                </div>
                                            </div>


                                            {/* Map to Read Product in Array  */}
                                            {
                                                Products?.map((item, index) => {
                                                    console.log("sdsds");
                                                    return (
                                                        <div key={item.id} className="card mb-3">
                                                            <div className="card-body">
                                                                <div className="d-flex justify-content-between">
                                                                    <div className="d-flex flex-row align-items-center">
                                                                        <div>
                                                                            <img
                                                                                src={item.image}
                                                                                className="img-fluid rounded-3" alt="Shopping item" style={{ width: "65px" }} />
                                                                        </div>
                                                                        <div className="ms-3">
                                                                            <h5>{item.title}</h5>
                                                                        </div>
                                                                    </div>
                                                                    <div className="d-flex flex-row align-items-center">
                                                                        <div style={{ width: "50px" }}>
                                                                            <h5 className="fw-normal mb-0">2</h5>
                                                                        </div>
                                                                        <div style={{ width: "80px" }}>
                                                                            <h5 className="mb-0">${item.price}</h5>
                                                                        </div>
                                                                        <Link style={{ color: "#cecece" }} onClick={() => Delete(item.id)}><i className="fas fa-trash-alt"></i></Link>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )
                                                })

                                            }
                                        </div>
                                    </Bounce>
                                    <Bounce right>
                                        <div className="col-lg-5">
                                            {/* Card Details */}
                                            <div className="card bg-dark text-white rounded-3">
                                                <div className="card-body">
                                                    <div className="d-flex justify-content-between align-items-center mb-4">
                                                        <h5 className="mb-0">Card details</h5>
                                                        <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp"
                                                            className="img-fluid rounded-3" style={{ width: "45px" }} alt="Avatar" />
                                                    </div>

                                                    <p className="small mb-2">Card type</p>
                                                    <a href="#!" type="submit" className="text-white"><i
                                                        className="fab fa-cc-mastercard fa-2x me-2"></i></a>
                                                    <a href="#!" type="submit" className="text-white"><i
                                                        className="fab fa-cc-visa fa-2x me-2"></i></a>
                                                    <a href="#!" type="submit" className="text-white"><i
                                                        className="fab fa-cc-amex fa-2x me-2"></i></a>
                                                    <a href="#!" type="submit" className="text-white"><i className="fab fa-cc-paypal fa-2x"></i></a>

                                                    <form className="mt-4">
                                                        <div className=" mb-4">
                                                            <label className="form-label text-white" for="typeName">Cardholder's Name</label>
                                                            <input type="text" id="typeName" className="form-control" siez="17"
                                                                placeholder="Cardholder's Name" />
                                                        </div>

                                                        <div className="mb-4">
                                                            <label className="form-label text-white" for="typeText">Card Number</label>
                                                            <input type="text" id="typeText" className="form-control " siez="17"
                                                                placeholder="1234 5678 9012 3457" minlength="19" maxlength="19" />
                                                        </div>

                                                        <div className="row mb-4">
                                                            <div className="col-md-6">
                                                                <div className="">
                                                                    <label className="form-label text-white" for="typeExp">Expiration</label>
                                                                    <input type="text" id="typeExp" className="form-control"
                                                                        placeholder="MM/YYYY" size="7" minlength="7" maxlength="7" />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <div className="">
                                                                    <label className="form-label text-white" for="typeText">Cvv</label>
                                                                    <input type="password" id="typeText" className="form-control "
                                                                        placeholder="&#9679;&#9679;&#9679;" size="1" minlength="3" maxlength="3" />
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </form>


                                                    <hr className="my-4" />
                                                    <div className="d-flex justify-content-between mb-4">
                                                        <p className="mb-2">Total(Incl. taxes)</p>
                                                        <p className="mb-2">${TotalPrice}</p>
                                                    </div>

                                                    <button type="button" className="btn btn-light btn-block btn-lg">
                                                        <div className="d-flex justify-content-between">
                                                            <span>${TotalPrice}</span>
                                                            <span>Checkout <i className="fas fa-long-arrow-alt-right ms-2"></i></span>
                                                        </div>
                                                    </button>

                                                </div>
                                            </div>

                                        </div>
                                    </Bounce>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Cart
