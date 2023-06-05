
import BlogContent from '../../components/BlogsPage/BlogContent/BlogContent'
import { PEOPLES_DATA, PERSON_DATA } from '../../components/BlogsPage/Data'
import './BlogsPage.css'

function Blogs() {
    return (
        <div className="container blog">
            <div className="child inner-container">
                {PEOPLES_DATA.map((element, index) => (
                    <BlogContent
                        key={index}
                        PeoplesData={element}
                    />
                ))}
            </div>
            <div className="child">
                <BlogContent
                    PeoplesData={PERSON_DATA}
                />
            </div>
        </div>

    )
}
export default Blogs