import ButtonLarge from "../ButtonLarge/ButtonLarge"
import './VideoSectionWrapper.css'

function VideoSectionWrapper(props) {
    let { title, link, extraText } = props
    return (
        <div className="video-section-wrapper">
            <h2 className="section-title">{title}</h2>
            <div className="video-wrapper"> <iframe width="560" height="315"
                src={link} title="YouTube video player" frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen></iframe> </div>
            <span className="video-extra-text">{extraText}</span>
            <ButtonLarge 
            href="#"
            text="Visi vaizdo įrašai"
            />
        </div>
    )
}
export default VideoSectionWrapper