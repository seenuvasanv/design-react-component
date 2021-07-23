import SpeakersRenderProps from "../src/components/SpeakerRenderProps"


const Speakers = () => {

    return (
        <SpeakersRenderProps>
            {   ({speakers}) => {
                    return (<div>
                        {
                            speakers.map(({imgSrc, name}) => (<img src={`/images/${imgSrc}.jpg`} alt={name} key={imgSrc} />))
                        }
                    </div>)
                }
            }
        </SpeakersRenderProps>
    )
}

export default Speakers
