/* eslint-disable no-sequences */
import { selectUser } from '../../utils/selector'
import { useSelector} from "react-redux"
import { useDispatch } from "react-redux"
import { useState } from "react"
import Userinfo from "../user/Userinfo";
import {fetchUserUpdate} from "../../features/service/user";


function EditName() {
    const user = useSelector(selectUser)
    const dispatch = useDispatch()
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [userName, setUsername] = useState(false)

    function edit(e) {
        e.preventDefault()
        const token = (user.token || localStorage.getItem('token-info'))
        const edit = dispatch(fetchUserUpdate(token, firstName, lastName))
        console.log(user.data)

        if (!edit) {
            return
        }
        setUsername(false)
    }
    return userName ? (
        <div className="header">
            <h1 className="">Welcome back</h1>
            <form className="formChange" onSubmit={(e) => edit(e)}>
                    
                <div className="divInputChange">
                    <input className="inputChange" type="text" placeholder={user.data.data.firstName} onChange={(user) => setFirstName(user.target.value)} />
                    <input className="inputChange" type="text" placeholder={user.data.data.lastName} onChange={(user) => setLastName(user.target.value)} />
                </div>
                <div className="divButtonChange">
                    <button className="buttonChange" type="submit">Save</button>
                    <button className="buttonChange" onClick={(e) => (e.preventDefault(e), setUsername(false))}>Cancel</button>
                </div>
            </form>
        </div>
    ) :(
        <div className="header">
            <Userinfo firstName={user.data.data.firstName} lastName={user.data.data.lastName} />
            <button className="edit-button" onClick={() => setUsername(true)}>Edit Name</button>
        </div>  
    )
}

export default EditName