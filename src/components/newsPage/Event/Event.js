
import './Event.css'
function Event(props) {
    const { eventImageElementSrc, eventDay, eventMonth, eventLocation, eventTitle } = props
    if (!eventTitle) {
        return ""
    }
    const imgElement = eventImageElementSrc ?
        <div className="image-wrapper">
            <img className="event-image" src={eventImageElementSrc} />
        </div>
        : ""
    const eventDayElement = eventDay ?
        <span className="event-day">{eventDay}</span>
        : ""
    const eventMonthElement = eventMonth ?
        <span className="event-month">{eventMonth}</span>
        : ""
    const eventData = eventDayElement && eventMonthElement ?
        <div className="event-date">
            {eventDayElement}
            {eventMonthElement}
        </div>
        : ""
    const eventLocationElement = eventLocation ?
        <span className="event location">{eventLocation}</span>
        : ""
    return (
        <div className="event">
            <a href="#">
                {imgElement}
                <div className="event-content">
                    {eventData}
                    <div className="event-info">
                        {eventLocationElement}
                        <h3 className="event-title">{eventTitle}</h3>
                    </div>
                </div>
            </a>
        </div>
    )
}
export default Event