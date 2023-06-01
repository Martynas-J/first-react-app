function Podcast(props) {
    let {podcastImageSrc, podcastLength, podcastTitle, podcastDate} = props
    return (
        <div className="podcast">
            <div className="podcast-controls"> <img className="podcast-image"
                src={podcastImageSrc} />
                <span className="podcast-length">{podcastLength}</span>
                <button className="podcast-play">Play</button>
            </div>
            <div className="podcast-content">
                <h3 className="podcast-title">{podcastTitle}</h3>
                <span className="podcast-date">{podcastDate}</span>
            </div>
        </div>
    )
}
export default Podcast