import { useState, useEffect } from 'react'
import axios from 'axios'
import { Modal, Button } from 'react-bootstrap'

export default function newCommentModal ({open, onClose, group}) {

    const [comment, setComment] = useState('')
    const [ user, setUserInfo] = useState('')

    useEffect(() => {
        setUserInfo(JSON.parse(localStorage.getItem('user')))
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault()
        setUserInfo(JSON.parse(localStorage.getItem('user')))
        const newcomment = await axios.post('https://onewheeloneride-back.up.railway.app/createcomment', {
            comment: comment,
            user_id: user.id,
            group_id: group.id
        })
        onClose()

    }

    return (
        <div onClick={onClose}>
            <Modal show={open} onClick={(e) => {e.stopPropagation()}}>
                <Modal.Header closeButton onClick={onClose}>
                    <Modal.Title className="black">Add Ride</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="comment" className="form-label black">Ride Details</label>
                            <textarea className="form-control" id="comment" value={comment} onChange={(e) => setComment(e.target.value)}></textarea>
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={onClose}>Close</Button>
                    <Button type="submit" variant="primary" onClick={handleSubmit}>Save changes</Button>
                </Modal.Footer>
            </Modal>
        </div>   
    )
}