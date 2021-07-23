
const withData = (maxSpeakers) => {
    return (Component) => {
        const speakers = [
            {imgSrc: 'speaker-1124', name: 'Seenu Vasan'},
            {imgSrc: 'speaker-1530', name: 'Sai Yeshi'},
            {imgSrc: 'speaker-10803', name: 'Karthi Keyan'},
        ]
        const limitSpeakers = speakers.slice(0, maxSpeakers)
        return () => (
            <Component speakers={limitSpeakers}></Component>
        )
    }
}

export default withData
