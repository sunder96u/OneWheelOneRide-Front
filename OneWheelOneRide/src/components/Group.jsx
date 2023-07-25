import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import axios from 'axios'

export default function Group () {

    const [group, setGroup] = useState([])
    const navigate = useNavigate()
    const { id } = useParams()

    useEffect(() => {
        const getGroup = async () => {
            const response = await axios.get(`https://onewheeloneride-back.up.railway.app/groups/${id}`)
            setGroup(response.data)
        }
        getGroup()
    }, [])

    if (group.length === 0) {
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
                    <img src={group.picture} alt={group.name} className="img-fluid"/>
                </div>
                <div className="col-md-6">
                    <h1>{group.name}</h1>
                    <h4>{group.description}</h4>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <h3>Next Ride:</h3>
                    <p>Next ride comments will go here</p>
                </div>
            </div>
        </div>
    )
    }
}