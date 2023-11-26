import imagen from './../../assets/profile.jpeg'
import "./ProfileImage.css"

const ProfileImage = () => {

    return (
        <div className="ProfileImage">
            <h1>Perfil</h1>

            <img src={imagen} alt="" />


        </div>
    )

}

export default ProfileImage