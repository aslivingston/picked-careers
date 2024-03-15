import { Link } from "react-router-dom"
import HomeFeed from "./HomeFeed/HomeFeed"
import bannerImage from "./PC_Image001.jpg"
import teamImage from "./aaron-gilmore-aQLdDgROIZQ-unsplash.jpg"
import sectorImage from "./hello-i-m-nik-K_qGVldtzk0-unsplash.jpg"
import registerImage from "./PC_aimhigh_flyhigher.jpg"
import HomeFeedReversed from "./HomeFeed/HomeFeedReversed"


function HomePage() {

    return (
        <div className="homepage">
            <h2>Headhunters providing businesses with access to highly skilled talent.</h2>
            <img className="banner-img" src={bannerImage} alt="" />
            <HomeFeed image={teamImage} title='About our team' text="As Headhunters we believe in the power of talent to deliver success. Our team operates purely within our various creative specialisms covering Strategic Leadership Hire(s), Creative Design, Engineering, Construction, Healthcare, IT, Office Support and Sales & Marketing." link='' button='FIND OUT MORE'/>
            <HomeFeedReversed image={sectorImage} title='Sectors we cover' text="We have 15+ years of experience working in both business & recruitment - most at executive levels - meaning we have a proven track record of getting it right for our clients and talent alike." link='' button='FIND OUT MORE'/>
            <HomeFeed image={registerImage} title='Register with us' text="We are always on the look out for new talent. If you are looking to take the next step in your career, then we are here to help." link='' button='FIND OUT MORE'/>
            <div className="testamonies">
                <div className="testamony-content">
                    <p>“Maya has been a great help with the Recruitment of Architects. Maya takes time to recommend candidates that she knows will fit in with out Core Values and Culture. The candidates always have the correct skills and are of high quality.</p>
                    <small>HR Manager | Global Design Consultancy</small>
                </div>
                <div className="testamony-content">
                    <p>“Maya is one of the most professional individuals I have had the pleasure to work with over the last 3 years. Maya and her team at Picked Careers have been amazing to work alongside and I cannot thank them enough for being part of my journey! I trust our paths will cross in the future and have no doubt that she will continue to make a tremendous success of the business and provide amazing services to all of her clients.”</p>
                    <small>Lucy Smith | Owner & Founder at Clarity Umbrella Ltd</small>
                </div>
                <div className="testamony-content">
                    <p>“Maya is one of the most efficient professional recruitment experts I have ever met. She assisted me in finding a new role in UK, able to advise me on my options and most importantly she was always honest, helpful and understanding of my situation.”</p>
                    <small>Ramon Blanco | Associate Partner at Foster + Partners</small>
                </div>
            </div>
            <div className="homepage-contact">
                <p className="heading">We want to hear from you.</p>
                <Link to="/contact"><button>CONTACT US</button></Link>
            </div>
        </div>
    )
}

export default HomePage