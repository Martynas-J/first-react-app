import ButtonLarge from "./ButtonLarge"
import { EVENTS_DATA } from "./Data"
import Event from "./Event"


function EventsWrapper(props) {
    return (
        <div className="events-wrapper">
            <h2 className="section-title">{props.title}</h2>
            <div className="events-list">
                {
                    EVENTS_DATA.map((data, index) => (
                        <Event 
                        key={index}
                        eventImageElementSrc={data.eventImageElementSrc}                   
                        eventDay={data.eventDay}                   
                        eventMonth={data.eventMonth}                   
                        eventLocation={data.eventLocation}                   
                        eventTitle={data.eventTitle}                   
                        />
                        
                    ))
                }
            </div>
            <ButtonLarge
                text="Daugiau"
                link="#"
            />

        </div>
    )
}
export default EventsWrapper