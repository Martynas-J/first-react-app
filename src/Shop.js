function Shop(props) {
    const { shopName, phone, email, address } = props
    return (
        <div className="col-md-6 col-sm-12">
            <div className=" pb-5 shadow p-3 bg-body rounded">
                <h2 className="fs-4 fw-bold ">{shopName}</h2>
                <div className="fs-6 fw-bold">Phone: <a className="text-decoration-none fw-normal"
                    href="http://">{phone}</a></div>
                <div className="fs-6 fw-bold">Email: <a className="text-decoration-none fw-normal"
                    href="http://">{email}</a></div>
                <div className="fs-6 fw-bold">Address: <a className="text-decoration-none fw-normal"
                    href="http://">{address}</a></div>
            </div>
        </div>
    )

}
export default Shop