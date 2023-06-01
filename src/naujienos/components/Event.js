
function Event(props) {
    let { eventImageElementSrc, eventDay, eventMonth, eventLocation, eventTitle } = props
    return (
        <div className="event">
            <a href="#">
                {eventImageElementSrc ?
                    <div className="image-wrapper">
                        <img className="event-image"
                            src={eventImageElementSrc} />
                    </div> : ""}

                <div className="event-content">
                    <div className="event-date"> <span className="event-day">{eventDay}</span>
                        <span className="event-month">{eventMonth}</span>
                    </div>
                    <div className="event-info">
                        <span className="event location">{eventLocation}</span>
                        <h3 className="event-title">{eventTitle}</h3>
                    </div>
                </div>
            </a>
        </div>
    )
}
export default Event