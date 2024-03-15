import london from './alev-takil-7ojyp-IXW7w-unsplash.jpg'
import stairs from './force-majeure-3qdamQEaW-8-unsplash-scaled-e1666710960237-1920x2306.webp'

function Testimonials() {

    return (
        <div className="testamonials-page">
            <div className="homefeed-container-reversed">
                <div className='content'>  
                    <h3 className='heading'>“Maya is one of the most efficient, professional recruitment experts I have ever met. She assisted me in finding a new role in UK, able to advise me on my options and most importantly she was always honest, helpful and understanding of my situation.”</h3>
                    <p>Ramon Blanco | Associate Partner at Foster + Partners</p>
                </div>
                <div className='img-div'>
                    <img src={london} alt="" />
                </div>
            </div>
            <div className="testamonies dark">
                <div className="testamony-content">
                    <p>“Maya is extremely efficient and professional, she has in depth knowledge of the interior design/architecture industry and provided me with some honest career advice to find my current position. Maya is also very friendly and willing to take the time to meet with the candidate to understand their needs in order to find the suitable employment. I would highly recommend Maya without any hesitation.”</p>
                    <small>Eric Tang | Interior Designer / 3D Visualiser</small>
                </div>
                <div className="testamony-content">
                    <p>Picked Careers are so much more than any ordinary recruiter agency. They do genuinely care about their clients and they are very trustworthy, knowledgable and professional. Picked Careers changed my career - and my life - for the best. They helped me every step of the way, and I strongly recommend them if you are either looking for a position or recruiting for your company. I have recommended PICKED to several of my colleagues, who were always very happy with the results. Picked Careers will surely find the perfect match for you!</p>
                    <small>Joana Cardoso</small>
                </div>
                <div className="testamony-content">
                    <p>“A good professional is also the result of good relations, in this sense Maya was the first person to bet on me as Architect and Interior Design professional in UK. She was always available, looking for the best solutions that benefit both the employer company and myself. Be represented by the Maya is like having a personal PR. I definitely recommend her, as for the service provided and transparency to any professional like me, who at times need that extra energy to catapult his career.”</p>
                    <small>Luis Moreira | Design Manager Accor Group</small>
                </div>
            </div>
            <div className="homefeed-container-reversed">
                <div className='img-div'>
                    <img src={stairs} alt="" />
                </div>
                <div className='content'>
                    <h3 className='heading'>“A supportive advisor during the process, engaging and assured throughout.”</h3>
                    <p>Philip Wright | Senior Architect</p>
                </div>
            </div>

            <div className="testamonies dark">
                <div className="testamony-content">
                    <p>“Maya is professional, helpful and supportive. She has taken the time to understand a candidate’s skills beyond CV and is dedicated to finding the perfect fit for both the candidate and the company. She has gone the extra mile to send on useful tips for my interview, to make sure that I was well settled at my new job. I would highly recommend Maya.”</p>
                    <small>John Yim | Architect at Spink Property</small>
                </div>
                <div className="testamony-content">
                    <p>“Maya is one of the most professional individuals I have had the pleasure to work with over the last 3 years. Maya and her team at Picked Careers have been amazing to work alongside and I cannot thank them enough for being part of my journey! I trust our paths will cross in the future and have no doubt that she will continue to make a tremendous success of the business and provide amazing services to all of her clients”</p>
                    <small>Lucy Smith | Owner & Founder at Clarity Umbrella Ltd</small>
                </div>
                <div className="testamony-content">
                    <p>“I had a pleasure working with Maya on two occasions. Maya did a great job sending me to interviews to companies that were relevant to my skills and requirements. She is very professional and knows the industry very well, and she pays attention to her candidates. I would definitely work with Maya again.”</p>
                    <small>Kasia Miroslaw | CGI Artist</small>
                </div>
            </div>
        </div>
    )
}

export default Testimonials