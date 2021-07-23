import { useContext } from 'react'
import { data } from './../../SpeakerData'
import Speaker from "./Speaker"
import SpeakerAdd from "./SpeakerAdd"
import useRequestRest, { REQUEST_STATUS } from "../hooks/useSpeakerRest"
import ReactPlaceholder from "react-placeholder/lib"
import { SpeakerFilterContext } from '../contexts/SpeakerFilterContext'

const SpeakerList = () => {

  const {
    data: speakersData,
    requestStatus,
    error,
    updateRecord,
    insertRecord,
    deleteRecord,
  } = useRequestRest()

  const { eventYear, searchQuery } = useContext(SpeakerFilterContext)
  
  if (requestStatus === REQUEST_STATUS.FAILURE) {
    return <h4 className="text-info">{error}...</h4>
  }
  
  return (<div className="container speakers-list">
            <ReactPlaceholder
              type="media"
              rows={15}
              className="speakerslist-placeholder"
              ready={requestStatus === REQUEST_STATUS.SUCCESS}>
              <SpeakerAdd eventYear={eventYear} insertRecord={insertRecord} />
              <div className="row">
                {
                  speakersData
                  .filter(({ first, last }) => {
                    return !searchQuery.trim()
                      || first.toLowerCase().includes(searchQuery.toLowerCase())
                      || last.toLowerCase().includes(searchQuery.toLowerCase())
                  })
                  .filter(speaker => {
                    return (speaker.sessions || []).filter(session => session.eventYear === eventYear).length
                  })
                  .map(speaker => <Speaker
                    key={speaker.id}
                    speaker={speaker}
                    updateRecord={updateRecord}
                    insertRecord={insertRecord}
                    deleteRecord={deleteRecord} />)
                }
              </div>
            </ReactPlaceholder>
          </div>)
}

export default SpeakerList
