function SectorCard({image, title, text}) {

    return (
        <div className="sector-card">
            <img src={image} alt="" />
            <h3>{title}</h3>
            <p>{text}</p>
        </div>
    )

}

export default SectorCard