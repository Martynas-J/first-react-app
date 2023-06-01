import EventsWrapper from "./EventsWrapper"
import PodcastsWrapper from "./PodcastsWrapper"

function SidebarContent(props) {
    return (
        <aside className="sidebar-content">
            <PodcastsWrapper title="Podcastai" />
            <EventsWrapper title="Renginiai" />
        </aside>
    )
}
export default SidebarContent