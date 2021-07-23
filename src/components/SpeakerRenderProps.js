
const SpeakersRenderProps = ({children}) => {
    const speakers = [
        {imgSrc: 'speaker-1124', name: 'Seenu Vasan'},
        {imgSrc: 'speaker-1530', name: 'Sai Yeshi'},
        {imgSrc: 'speaker-10803', name: 'Karthi Keyan'},
    ]
    return children({
        speakers,
    })
}

export default SpeakersRenderProps