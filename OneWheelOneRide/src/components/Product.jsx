import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

export default function Products () {

    const [product, setProduct] = useState([])
    let key = useParams()

    useEffect(() => {
        const getProduct = async () => {
            const response = await axios.get(`https://onewheeloneride-back.up.railway.app/products/${key.id}`)
            setProduct(response.data)
        }
        getProduct()
    }, [])

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-2">
                    <button type="button" className="btn btn-primary" onClick={() => window.history.back()}>Return</button>
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
                        <button type="button" className="btn btn-primary">Add to Cart</button>
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