import ProfileHeader from "../../components/Profile/ProfileHeader"
import ProfileImage from "../../components/Profile/ProfileImage"
import ProfileLinks from "../../components/Profile/ProfileLinks"

const Profile = () => {

    return (
        <div className="Profile">
            <ProfileHeader />
            <ProfileImage />
            <ProfileLinks />
        </div>
    )
}

export default Profile