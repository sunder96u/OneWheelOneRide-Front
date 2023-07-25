import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import axios from 'axios'

export default function Trail () {

    const [trails, setTrails] = useState([])
    const navigate = useNavigate()
    const { id } = useParams()

    useEffect(() => {
        const getTrail = async () => {
            const response = await axios.get(`https://onewheeloneride-back.up.railway.app/trails/${id}`)
            setTrails(response.data)
        }
        getTrail()
    }, [])

    if (trails.length === 0) {
        return (
            <div><h1>Loading...</h1></div>
        )
    } else {      
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-2">
                    <button type="button" className="btn btn-danger" onClick={() => window.history.back()}>Return</button>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <img src={trails.picture} alt={trails.name} className="img-fluid"/>
                </div>
                <div className="col-md-6">
                    <h1>{trails.name}</h1>
                    <h2>Difficulty: {trails.difficulty}</h2>
                    <h4>Address: {trails.address}</h4>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <h3>Reviews</h3>
                    <p>Reviews will go here</p>
                </div>
            </div>
        </div>
    )
    }
}