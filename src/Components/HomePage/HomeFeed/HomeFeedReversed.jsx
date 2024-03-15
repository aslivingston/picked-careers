function HomeFeedReversed({image, title, link, button, text}) {

    return (
        <div className="homefeed-container-reversed">
            <div className="content">
                <h3 className="heading">{title}</h3>
                <p>{text}</p>
                <a href={link}>{button}</a>
            </div>
            <div className="img-div">
                <img src={image} alt="" />
            </div>
        </div>
    )
}

export default HomeFeedReversed