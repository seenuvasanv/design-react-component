import { useContext, useState, memo } from 'react'
import { SpeakerFilterContext } from "./../contexts/SpeakerFilterContext"
import { SpeakerContext, SpeakerProvider } from "../contexts/SpeakerContext"
import SpeakerDelete from './SpeakerDelete'
import ErrorBoundary from './ErrorBoundary'

const Session = ({title, room}) => {
    return (
        <span className="session w-100">
        {title} <strong>Room: {room.name}</strong>
        </span>
    )
}

const Sessions = () => {
    const { speaker: { sessions }} = useContext(SpeakerContext)
    const { eventYear } = useContext(SpeakerFilterContext)
    return (
        <div className="sessionBox card h-250">
            {
                sessions.filter(({eventYear: year}) => eventYear === year)
                        .map(session => <Session key={session.id} {...session} />)
            }
        </div>
    )
}

const ImageWithFallback = ({src, ...props}) => {
    const [error, setError] = useState(false)
    const [imgSrc, setImgSrc] = useState(src)

    const onError = () => {
        if (!error) {
            setImgSrc('/images/speaker-99999.jpg')
            setError(true)
        }
    }
    
    return <img src={imgSrc} {...props} onError={onError} />
}

const SpeakerImage = () => {
    const { speaker: { first, last, id }} = useContext(SpeakerContext)
    return (
        <div className="speaker-img d-flex flex-row justify-content-center align-items-center h-300">
        <ImageWithFallback className="contain-fit"
            src={`/images/speaker-${id}.jpg`}
            width='300'
            alt={`${first} ${last}`}/>
        </div>
    )
}

const SpeakerFavorite = () => {
    const [inTransition, setInTransition] = useState(false)
    const { speaker, updateRecord } = useContext(SpeakerContext)
    const doneCallback = () => {
        setInTransition(false)
    }
    return (
        <div className="action padB1">
            <span onClick={() => {
                setInTransition(true)
                return updateRecord({
                    ...speaker, favorite: !speaker.favorite
                }, doneCallback)
            }}>
                <i className={
                    speaker.favorite ? 'fa fa-star orange' : 'fa fa-star-o orange'
                } />{' '}
                Favorite{' '}
                {
                    inTransition && <span className="fas fa-circle-notch fa-spin"></span>
                }
            </span>
        </div>
    )
}

const SpeakerDemographics = () => {
    const { speaker: { first, last, bio, company, twitterHandle }} = useContext(SpeakerContext)
    return (
        <div className="speaker-info">
            <div className="d-flex justify-content-between mb-3">
                <h3 className="text-truncate w-300">
                {first} {last}
                </h3>
            </div>
            <SpeakerFavorite />
            <div>
                <p className="card-description">
                    {bio}
                </p>
                <div className="social d-flex flex-row mt-4">
                    <div className="company">
                        <h5>Company</h5>
                        <h6>{company}</h6>
                    </div>
                    <div className="twitter">
                        <h5>Twitter</h5>
                        <h6>{twitterHandle}</h6>
                    </div>
                </div>
            </div>
        </div>
    )
}

const areEqualSpeaker = (prevProps, nextProps) => {
    return prevProps.speaker.favorite === nextProps.speaker.favorite
}

const SpeakerNoError = memo(function Speaker({ speaker, updateRecord, insertRecord, deleteRecord }) {
    const { showSessions } = useContext(SpeakerFilterContext)
    return (
        <SpeakerProvider
            speaker={speaker}
            updateRecord={updateRecord}
            insertRecord={insertRecord}
            deleteRecord={deleteRecord}>
            <div className="col-xs-12 col-md-6 col-lg-4">
                <div className="card card-height p-4 mt-4">
                    <SpeakerImage />
                    <SpeakerDemographics />
                </div>
                {
                    showSessions && <Sessions />
                }
                <SpeakerDelete />
            </div>
        </SpeakerProvider>
    )
}, areEqualSpeaker)

const Speaker = (props) => {
    return <ErrorBoundary>
        <SpeakerNoError {...props}></SpeakerNoError>
    </ErrorBoundary>
}

export default Speaker