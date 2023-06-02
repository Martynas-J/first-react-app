
import './NewsItem.css'

function NewsItem(props) {
    let { link, imgSrc, newsCategory, newsTitle, newsDate } = props
    return (
        <div className="news-item">
            <a href={link}>
                <div className="image-wrapper">
                    <img src={imgSrc} />
                </div>
                <div className="news-content">
                    <span className="news-category">{newsCategory}</span>
                    <h3 className="news-title">{newsTitle}</h3>
                    <span className="news-date">{newsDate}</span>
                </div>
            </a>
        </div>
    )
}
export default NewsItem
