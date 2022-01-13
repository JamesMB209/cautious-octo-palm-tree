export default function Links(props) {
    return (
        <>
            <div className="row table-header">
                <div className="col">
                    <p>Name</p>
                </div>
                <div className="col">
                    <p>Url</p>
                </div>
                <div className="col">
                    <p>Tags</p>
                </div>
            </div>
            {props.links.map((link, index) => (
                <div className="row table-row" key={index}>
                    <div className="col">
                        <p>{link.name}</p>
                    </div>
                    <div className="col">
                        <p>{link.link}</p>
                    </div>
                    <div className="col">
                        <p>{link.tags.join(", ")}</p>
                    </div>
                </div>
            ))}
        </>
    )
}