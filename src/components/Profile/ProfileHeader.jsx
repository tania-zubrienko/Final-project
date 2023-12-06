
import "./ProfileHeader.css"
import { useContext } from 'react'
import { AuthContext } from '../../context/auth.context'


const ProfileHeader = () => {

    const { loggedUser } = useContext(AuthContext)
    function display() { alert("hola") }

    return (
        <>
            <div className="backgroundLine" />
            <div className="ProfileHeader">
                <h1>{loggedUser.name}</h1>
                <img src={loggedUser.avatar} alt="" />
            </div >
        </>
    )

}

export default ProfileHeader