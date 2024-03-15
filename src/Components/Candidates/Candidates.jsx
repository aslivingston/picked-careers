import hello from './adam-solomon-WHUDOzd5IYU-unsplash-scaled.jpg'

function Candidates() {

    return (
        <div className="aboutUs">
            <div className="vision">
                <small>Get in touch.</small>
                <h2>We’ve been matching talented individuals to renowned local and global companies since 2015. Our main goal is to build a long standing relationship with all talent we represent. And that journey begins here. </h2>
                <h2>Fill out the form below and one of our expert consultants will be in touch.</h2>
            </div>
            <div className="form-section">
                <div className='form-img'>
                    <img src={hello} alt="" />
                </div>
                <div className="form-content">
                    <p>We’d love to hear from you.</p>
                    <form action="">
                        <div>
                            <label>Name (required)</label>
                        </div>
                        <div className='name-flexbox'>
                            <div>
                                <label htmlFor="">First Name</label>
                                <input id="name" type="text"></input>
                            </div>
                            <div>
                                <label htmlFor="">Last Name</label>
                                <input id="name" type="text" ></input>
                            </div>
                        </div>
                        <label htmlFor="">Email (required)</label>
                        <div>
                            <input id="name" type="text" ></input>
                        </div>
                        <label htmlFor="">Files (required)</label>
                        <div>
                            <textarea placeholder=' .jpg, .jpeg, .png, .pdf'></textarea>
                        </div>
                        <label htmlFor="">Message (required)</label>
                        <div>
                            <textarea></textarea>
                        </div>

                        <div className='permission'>
                            <p>Permission</p>
                            <p>We will use the information you provide on this form to provide you with regular updates. Please confirm you would like us to contact you by ticking the email box below. You can change your mind at any time but clicking the unsubscribe link in the footer of any email you receive from us. We will treat your information with respect.</p>
                        </div>
                        <div className='email-box'>
                            <input type="checkbox" id="checkbox"></input>
                            <label id="checkbox-text">Email</label>
                        </div>
                        <div>
                            <button className='contact-button'>Send</button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default Candidates