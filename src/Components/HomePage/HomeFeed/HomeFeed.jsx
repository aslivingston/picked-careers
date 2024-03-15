function HomeFeed({image, title, link, button, text}) {

    return (
        <div className="homefeed-container">
            <div className="img-div">
                <img src={image} alt="" />
            </div>
            <div className="content">
                <h3 className="heading">{title}</h3>
                <p>{text}</p>
                <a href={link}>{button}</a>
            </div>
        </div>
    )
}

export default HomeFeed