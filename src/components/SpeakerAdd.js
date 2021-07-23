import withAuth from "./withAuth"

const SpeakerAdd = ({ eventYear, insertRecord, loggedInState }) => {
    
    if (!loggedInState) return null

    return (
        <a href="#" className="addSes">
            <i onClick={
                e => {
                    e.preventDefault()
                    const firstLast = window.prompt('Enter first and last name', '')
                    const firstLastArray = firstLast.split(' ')
                    insertRecord({
                        id: '99999',
                        first: firstLastArray[0],
                        last: firstLastArray[1],
                        sessions: [
                            {
                                id: '8888',
                                title: `New session for ${firstLastArray[0]}`,
                                room: {
                                    name: "Main ball room"
                                },
                                eventYear
                            }
                        ]
                    })
                }
            }>
                +
            </i>
        </a>
    )
}

export default withAuth(SpeakerAdd)