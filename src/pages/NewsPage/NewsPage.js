
import VideoSectionWrapper from '../../components/newsPage/VideoSectionWrapper/VideoSectionWrapper';
import NewsWrapper from '../../components/newsPage/NewsWrapper/NewsWrapper';
import PodcastsWrapper from '../../components/newsPage/PodcastsWrapper/PodcastsWrapper'
import EventsWrapper from '../../components/newsPage/EventsWrapper/EventsWrapper'
import './NewsPage.css'
function News() {
    return (
        <div className="container">
            <div className="content-wrapper">
                <main className="main-content">
                    <NewsWrapper
                        title="Naujienos"
                    />
                    <VideoSectionWrapper
                        title="Vaizdo įrašai"
                        link="https://www.youtube.com/embed/b8dGCsP75HA"
                        extraText="Jei galiu aš – gali ir tu"
                    />
            
                </main>
                <aside className="sidebar-content">
                    <PodcastsWrapper title="Podcastai" />
                    <EventsWrapper title="Renginiai" />
                </aside>
            </div>
        </div>
    );
}
export default News
