
import imagen from './../../assets/profile.jpeg'
import "./ProfileImage.css"
import { useContext } from 'react'
import { AuthContext } from '../../context/auth.context'

const ProfileImage = () => {

    const { loggedUser } = useContext(AuthContext)
    console.log(loggedUser)

    return (
        <div className="ProfileImage">
            <h1>Perfil</h1>

            <img src={loggedUser.avatar} alt="" />


        </div>
    )

}

export default ProfileImage