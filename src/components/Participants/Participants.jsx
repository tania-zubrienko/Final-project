const Participants = ({ participants }) => {
    console.log(participants)
    return (
        <div className="Participants">
            {participants.length > 0 ?
                participants.map(e => <h1> Soy participante {e.name}</h1>)
                :
                <h5>El grupo todavía está vacío</h5>}

        </div>
    )
}

export default Participants