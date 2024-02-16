import { Button, Card } from 'react-bootstrap';
import { HiOutlineCurrencyDollar } from "react-icons/hi";
import { IoBagAdd } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { increment } from '../Redux/slice/CartCount';
import { Zoom } from 'react-reveal';
import { getProductinCart } from '../Redux/slice/ProductSlice';





const MyCard = ({ data }) => {
    // TODO: Get Data from Context Store
    // const { setCount } = useContext(CartContext);


    // TODO: Dispatch Data in ReduxToolKit Store
    const dispatch = useDispatch()
    const dispatchinCart = useDispatch();


    // TODO: UseNavigation Hooks for navigation Details Page
    const Navigate = useNavigate();


    // TODO: add Function to add element to cart Page
    const add = (id) => {
        dispatch(increment());
        dispatchinCart(getProductinCart(id))
    }


    return (
        <Zoom>
            <div className='col-12 col-md-6 col-lg-3'>
                <Card>
                    <Card.Img variant="top" style={{ height: '220px', objectFit: 'contain' }} src={data.image} />
                    <Card.Body>
                        <Card.Title style={{ height: '72px', overflow: 'hidden' }}>{data.title}</Card.Title>
                        <div className='d-flex justify-content-between my-1 '>
                            <Card.Text className='my-2'>
                                {data.price} <HiOutlineCurrencyDollar fontSize={18} />
                            </Card.Text>
                        </div>
                        <div className='d-flex justify-content-between my-2 '>
                            <Button onClick={() => {
                                add(data.id)
                            }
                            } variant="success" >Add <IoBagAdd fontSize={16} />
                            </Button>

                            <Button variant="dark" onClick={() => {
                                Navigate(`/cardDetails/${data.id}`)
                            }}>
                                Details
                            </Button>
                        </div>
                    </Card.Body>
                </Card>
            </div>
        </Zoom>
    )
}

export default MyCard
