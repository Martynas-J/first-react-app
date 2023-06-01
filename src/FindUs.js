import Shop from "./Shop"
import { DATA } from "./config"

function FindUs() {
    return (
        <div className="col-md-12 col-xl-6 col-lg-8 order-lg-0 order-md-3">
            <div className="row g-3">
                <h1 className="col-12 py-5 ps-0 fs-2">Find Us</h1>

                {DATA.map((item, index) => (
                    <Shop
                        key={index}
                        shopName={item.shopName}
                        phone={item.phone}
                        email={item.email}
                        address={item.address}
                    />

                ))}

            </div>
        </div>
    )

}
export default FindUs