import MyCard from './MyCard';
import { useSelector } from 'react-redux';
import Categroy from './categroy/Categroy';


const Home = (props) => {
    // TODO: Get Data from Context Store
    // const { products, setProduct } = useContext(Products);
    // TODO: TO Get Data from ReduxToolKit Store
    const { products } = useSelector((state) => state.ProductSlice)
    const { loading } = useSelector((state => state.ProductSlice))

    return (

        <div className="container my-5">
            <div className="row g-3">
                <Categroy />
                {
                    loading === false ? (products.map((item) => {
                        return (
                            <MyCard key={item.id} data={item} />
                        )
                    })) : (
                        <div className="vh-100 d-flex justify-content-center align-items-center">
                            <div class="spinner-border" role="status">
                                <span class="visually-hidden">Loading...</span>
                            </div>
                        </div>
                    )
                }

            </div>
        </div>
    )
}

export default Home;
