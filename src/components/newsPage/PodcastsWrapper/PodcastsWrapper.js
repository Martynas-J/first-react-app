import { PODCASTS_DATA } from "../Data"
import Podcast from "../Podcast/Podcast"
import './VideoSectionWrapper.css'

function PodcastsWrapper(props) {
    return (
        <div className="podcasts-wrapper">
            <h2 className="section-title">{props.title}</h2>
            <div className="podcasts-wrapper">
                {PODCASTS_DATA.map((data, index) => (
                    <Podcast
                        key={index}
                        podcastImageSrc={data.podcastImageSrc}
                        podcastLength={data.podcastLength}
                        podcastTitle={data.podcastTitle}
                        podcastDate={data.podcastDate}
                    />

                ))}

            </div>
        </div>
    )
}
export default PodcastsWrapper