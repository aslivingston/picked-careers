import SectorCard from "./SectorCard/sectorCard"
import arrowImage from "./photo-1497005367839-6e852de72767.avif"
import noteImage from "./photo-1518349619113-03114f06ac3a.avif"
import notebookImage from "./photo-1542435503-956c469947f6.avif"
import healthImage from "./pexels-karolina-grabowska-4226764EDITED.jpg"
import thinkImage from "./nikita-kachanovsky-bLY5JqP_Ldw-unsplash.webp"
import smileImage from "./jason-leung-60j0UB-Z_Yk-unsplash-1536x1024.jpg"

function Sectors() {

    return (
        <div className="sector-section">
            <div className="sectors">
                <SectorCard image={arrowImage} title='Creative Design & Construction' text='Founded by an experienced Director who has worked within Architecture, Construction and Recruitment, all employees at Picked Careers have a genuine passion for all things design and construction - as well as some of the best contacts in the industry. From Lead Architects, to Creative Directors, we use this specialised expertise to help secure talented professionals their next roles in their creative industry. Picked Careers successfully placed 73 Architects in 2019.'  /> 
                <SectorCard image={noteImage} title='Strategic Hire' text='In today’s ever changing marketplace, strategic roles remain a necessity - shaping, developing and growing a business for the future. With strong, long-standing relationships with their clients, Picked Careers understands the requirements and key drivers in the market, connecting clients with like-minded, highly skilled talent in roles ranging from Senior Management to Board Members.'  /> 
            </div>
            <div className="sectors-dark">
                <SectorCard image={notebookImage} title='Creative Office and Support' text='From HR, Admin, IT and Accounts - Picked Careers expert advice, knowledge and strength of service provides clients with long term solutions to their staffing needs. Proven with a 100% client retention and customer satisfaction survey in 2019. Picked Careers successfully placed 22 Support staff in 2019.'  />
                <SectorCard image={thinkImage} title='Sales & Marketing' text='In today’s competitive business world, a successful sales and marketing team lies at the heart of the heart of any company. Working with a wide range of businesses from SME’s through to FTSE 100 organisations, Picked Careers understands how to find and attract the right candidates for the job.'  /> 
            </div>
            <div className="sectors">    
                <SectorCard image={healthImage} title='Healthcare' text='We work with a number of reputable clients in the UK spanning across all levels of seniority throughout the healthcare sector. Roles range from Healthcare assistants, Nurses, Dermatologists, Aestheticians and more. All our candidates are vetted, checked and double checked to make sure we send only the best possible candidates to our clients.'  />   
                <SectorCard image={smileImage} title='Charity' text='Picked Careers are always looking for ways to support good causes and charitable organisations. We endeavour to build long-standing relationships with charities and not-for-profit organisations, striving to ‘give something back’ to our community.'  />
            </div>
        </div>

    )
}

export default Sectors