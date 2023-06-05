import InnerChild from "../InnerChild/InnerChild"


function BlogContent({ PeoplesData }) {
    let { name, status, imgSrc, header, paragraph } = PeoplesData
    return (
        <InnerChild>
            <div className="img"><img
                src={imgSrc}
                alt="" />
                <div className="foto-right">
                    <div className="name"> {name}</div>
                    <div className="po-name"> {status}</div>
                </div>
            </div>

            <div className="antraste">
                {header}
            </div>
            <div className="destimas">
                {paragraph}
            </div>
        </InnerChild>
    )
}
export default BlogContent