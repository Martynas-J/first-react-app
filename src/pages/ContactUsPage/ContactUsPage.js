
import FindUs from "../../components/contactPage/FindUs"
import Map from "../../components/contactPage/Map"
import 'bootstrap/dist/css/bootstrap.css';

function ContactUs() {
    return (
        <div className="container-xxl">
            <div className="row align-items-center gx-5 m-0 p-0">
                <FindUs title = "Find Us"/>
                <Map />
            </div>
        </div>
    )
}
export default ContactUs