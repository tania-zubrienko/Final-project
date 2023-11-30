
import "./ProfileImage.css"
import { useContext } from 'react'
import { AuthContext } from '../../context/auth.context'


const ProfileImage = () => {

    const { loggedUser } = useContext(AuthContext)
    function display() { alert("hola") }

    return (
        <>
            <div className="backgroundLine" />
            <div className="ProfileImage">
                <h1>{loggedUser.name}</h1>
                <img src={loggedUser.avatar} alt="" />
            </div >
        </>
    )

}

export default ProfileImage