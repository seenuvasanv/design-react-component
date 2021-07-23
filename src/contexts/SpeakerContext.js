import { createContext } from "react";

const SpeakerContext = createContext()

const SpeakerProvider = ({ children, updateRecord, insertRecord, deleteRecord, speaker }) => {
    return (
        <SpeakerContext.Provider value={{
            speaker, updateRecord, insertRecord, deleteRecord,
        }}>
            {
                children
            }
        </SpeakerContext.Provider>
    )
}

export {
    SpeakerContext,
    SpeakerProvider,
}