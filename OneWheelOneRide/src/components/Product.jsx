import { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Context from '../Context'
import { useCookies } from'react-cookie'

export default function Products () {

    const { cart, setCartInfo } = useContext(Context) 
    const [product, setProduct] = useState([])
    const [cookies, setCookies] = useCookies('cart')
    let key = useParams()

    useEffect(() => {
        const getProduct = async () => {
            const response = await axios.get(`https://onewheeloneride-back.up.railway.app/products/${key.id}`)
            setProduct(response.data)
        }
        getProduct()
    }, [])

    const addToCart = (product) => { 
        if (cart.find(item => item.id === product.id)) {
            setCartInfo(cart.map(item => item.id === product.id? {...item, quantity: item.quantity + 1 } : item))
        } else {
            setCartInfo([...cart, {...product, quantity: 1 }])
        }
        console.log(cart)
        setCookies('cart', JSON.stringify(cart))
    }
    console.log(cookies)

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-2">
                    <button type="button" className="btn btn-danger" onClick={() => window.history.back()}>Return</button>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-6 col-md-4">
                    <img className="img-fluid" src={product.picture} />
                </div>
                <div className="col-lg-6 col-md-8">
                    <div className="row">
                        <h3>{product.name}</h3>
                    </div>
                    <div className="row">
                        <p>product rating goes here</p>
                    </div>
                    <div className="row">
                        <h3>${product.price}</h3>
                    </div>
                    <div className="row">
                        <button type="button" className="btn btn-warning" onClick={() => addToCart(product)}>Add to Cart</button>
                    </div>
                    <div className="row">
                        <p>{product.description}</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <h1>Reviews</h1>
                <div className="col-lg-6 col-md-6">
                    <p>Reviews will go here</p>
                </div>
            </div>
        </div>
    )
}