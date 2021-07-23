
import withData from "../src/components/withData"

const Speakers = ({speakers}) => {

    return (
        <div>
            {
                speakers.map(({imgSrc, name}) => (<img src={`/images/${imgSrc}.jpg`} alt={name} key={imgSrc} />))
            }
        </div>
    )
}

export default withData(2)(Speakers)
