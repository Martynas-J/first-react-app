import { MAIN_NEWS_DATA, SECONDARY_NEWS_DATA } from "../Data"
import ButtonLarge from "../ButtonLarge/ButtonLarge"
import NewsItem from "../NewsItem/NewsItem"
import './NewsWrapper.css'

function NewsWrapper(props) {
    return (
        <div className="news-wrapper">
            <h2 className="section-title">{props.title}</h2>
            <div className="main-news">
                {MAIN_NEWS_DATA.map((data, index) => (
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
            <ButtonLarge
                href="#"
                text="Visos naujienos"
            />
        </div>
    )
}
export default NewsWrapper
