import ButtonLarge from "./ButtonLarge"
import MainNews from "./MainNews"
import SecondaryNews from "./SecondaryNews"

function NewsWrapper(props) {
    return (
        <div className="news-wrapper">
            <h2 className="section-title">{props.title}</h2>
            <MainNews />
            <SecondaryNews />
            <ButtonLarge
                href="#"
                text="Visos naujienos"
            />
        </div>
    )
}
export default NewsWrapper