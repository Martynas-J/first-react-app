import InnerChild from "../InnerChild/InnerChild"


function BlogContent({ PeoplesData }) {
    let { name, status, imgSrc, header, paragraph } = PeoplesData
    if (!name || !imgSrc) {
        return ""
    }
    const statusElement = status && <div className="po-name"> {status}</div>
    const headerElement = header && <div className="antraste">{header}</div>
    const paragraphElement = paragraph && <div className="destimas">{paragraph}</div>
    return (
        <InnerChild>
            <div className="img-wrapper"><img
                src={imgSrc}
                alt="" />
                <div className="foto-right">
                    <div className="name"> {name}</div>
                    {statusElement}
                </div>
            </div>
            {headerElement}
            {paragraphElement}
        </InnerChild>
    )
}
export default BlogContent