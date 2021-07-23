import { SpeakerFilterProvider } from '../contexts/SpeakerFilterContext'

import SpeakerList from './SpeakerList'
import SpeakersToolbar from './SpeakersToolbar'

const Speakers = () => {

    return (<SpeakerFilterProvider startingShowSessions={false}>
        <SpeakersToolbar />
        <SpeakerList />
    </SpeakerFilterProvider>)
}

export default Speakers