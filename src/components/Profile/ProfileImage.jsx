
import "./ProfileImage.css"
import { useContext } from 'react'
import { AuthContext } from '../../context/auth.context'
import { Button, NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";


const ProfileImage = () => {

    const { loggedUser } = useContext(AuthContext)
    const display = () => { alert("hola") }

    return (
        <div className="ProfileImage">

            <h1>{loggedUser.name}</h1>
            <img src={loggedUser.avatar} alt="" />
            <Button onClick={display}>Cambiar foto</Button>

        </div >
    )

}

export default ProfileImage