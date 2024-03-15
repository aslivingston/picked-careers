import passionImage from "./photo-1455849318743-b2233052fcff.avif"

function AboutUs() {

    return (
        <div className="aboutUs">
            <div className="vision">
                <small>Our Vision.</small>
                <h2>As headhunters we believe in the power of talent to deliver success. We pride ourselves on our collaborative approach, which not only enables us to attract the right candidates, but also ensures that we understand our clients’ needs and always provide unparalleled levels of service.</h2>
            </div>
            <div className="aboutUs-container">
                <div>
                    <img src={passionImage} alt="" />
                </div>
                <div className="aboutUs-content">
                    <p>At PICKED Careers, our team operates purely within our various creative specialisms covering Strategic Leadership Hire(s), Creative Design, Engineering, Construction, IT, Office Support and Sales & Marketing.</p>
                    <p>We are confident we can help you. We have extensive experience as headhunters. Our main goal is to build a long standing relationship with all clients and talent we represent. Understanding your needs is paramount so whether you’re a job-seeker or an employer, we understand the challenges you face. Not only that, we have a fantastic track record of recruiting real talent for renowned local and global companies. </p>
                    <p>Typically we work on senior engagements though we do recognise the importance of spotting young talent which is why we deal with everything from junior level to six-figure senior roles. </p>
                </div>
            </div>
            
        </div>
    )
}

export default AboutUs