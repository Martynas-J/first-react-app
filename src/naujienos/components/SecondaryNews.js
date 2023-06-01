import { SECONDARY_NEWS_DATA } from "./Data"
import NewsItem from "./NewsItem"

function SecondaryNews() {
    return (
        <div className="secondary-news">
            {SECONDARY_NEWS_DATA.map((data, index) => (
                <NewsItem
                    key={index}
                    link={data.link}
                    imgSrc={data.imgSrc}
                    newsCategory={data.newsCategory}
                    newsTitle={data.newsTitle}
                    newsDate={data.newsDate}
                />
            ))}
        </div>
    )
}
export default SecondaryNews