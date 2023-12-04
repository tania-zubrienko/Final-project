import './FriendCard.css'

const FriendCard = ({ friend }) => {

    return (
        <div className='FriendCard'>
            <img src={friend.avatar} alt='' />
            <div className='info'>
                <h5>{friend.name}</h5>
                <p>{friend.email}</p>
            </div>
        </div>
    )
}

export default FriendCard