import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { getAllProductsFetch, getAllProductsinCategroy } from '../../Redux/slice/ProductSlice'
import { Bounce } from 'react-reveal'

const Categroy = (props) => {

    const [allCategroy, setAllCategroy] = useState([]);
    // TODO: Dispatch Data in ReduxToolKit Store
    const dispatch = useDispatch();
    const dispatchAll = useDispatch();
    // TODO: Function to made filtering Products into ReduxToolKit Store for name Category
    const onFliter = (cat) => {
        dispatch(getAllProductsinCategroy(cat))
    }
    // TODO: Function to Get all Products from ReduxToolKit Store
    const NotFilter = () => {
        dispatchAll(getAllProductsFetch())
    }

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/categories')
            .then(res => res.json())
            .then(json => setAllCategroy(json))
    }, [])
    return (
        <div className='container'>
            <Bounce>
                <div className='my-2 mb-5'>
                    <div className='d-flex justify-content-center row '>
                        {
                            allCategroy.length ? (
                                [
                                    <button
                                        onClick={() => NotFilter()}
                                        className='btn btn-dark btn-rounded mx-2  col-md-4 col-lg-2 mb-1'
                                        data-mdb-ripple-init>All</button>,
                                    ...new Set(
                                        allCategroy.map((item) => {
                                            return (
                                                <button
                                                    key={Math.random()}
                                                    onClick={() => onFliter(item)}
                                                    className='btn btn-dark btn-rounded mx-2  col-md-4 col-lg-2 mb-1'
                                                    data-mdb-ripple-init>
                                                    {item}
                                                </button>
                                            )
                                        }
                                        )
                                    )
                                ]
                            ) : (<div className="vh-100 d-flex justify-content-center align-items-center">
                                <div class="spinner-border" role="status">
                                    <span class="visually-hidden">Loading...</span>
                                </div>
                            </div>)
                        }

                    </div>
                </div>
            </Bounce>

        </div>
    )
}

export default Categroy
