import NewsWrapper from "./NewsWrapper"
import VideoSectionWrapper from "./VideoSectionWrapper"

function MainContent() {
    return (
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
    )
}
export default MainContent