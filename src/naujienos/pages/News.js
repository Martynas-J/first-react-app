import MainContent from '../components/MainContent';
import SidebarContent from '../components/SidebarContent';
import './news.css'
function News() {
    return (
        <div className="container">
            <div className="content-wrapper">
                <MainContent />
                <SidebarContent />
            </div>
        </div>
    );
}
export default News
