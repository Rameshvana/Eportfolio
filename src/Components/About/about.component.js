import { FaGreaterThan } from "react-icons/fa6";
import { LiaGreaterThanSolid } from "react-icons/lia";
import { SlEmotsmile } from "react-icons/sl";
import { BsJournalRichtext } from "react-icons/bs";
import './about.component.css'

const AboutSecction = () => {
  return(
     <div className='about-container'>
        <h2 className='about-title'>About </h2>
        <p className='about-title-para'>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. 
          Quisquam quos quisquam cupiditate.<br/> Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
          <div className='as mt-5'>
            <img src='https://bootstrapmade.com/demo/templates/iPortfolio/assets/img/profile-img.jpg' className='about-img'/>
            <div>
              <h3 className='about-profile-title'>UI/UX Designer & Web Developer</h3>
              <p className='about-para-title'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
             </p>
             <div className='details-container'>
                    <ul className='details-card'>
                    <li><FaGreaterThan className="about-icon"/><strong>BirthDay: </strong><span className='about-span'>1 May 1995</span></li>
                    <li><FaGreaterThan className="about-icon"/><strong>Website:</strong><span className='about-span'>www.example.com</span></li>
                    <li><FaGreaterThan className="about-icon"/><strong>Phone:</strong><span className='about-span'>+23 456 7890</span></li>
                    <li><FaGreaterThan className="about-icon"/><strong>City:</strong><span className='about-span'>New York, USA</span></li>
                    </ul>
                    <ul className='details-card'>
                    <li><FaGreaterThan className="about-icon"/><strong>Age:</strong><span className='about-span'>30</span></li>
                    <li><FaGreaterThan className="about-icon"/><strong>Degree:</strong><span className='about-span'>Master</span></li>
                    <li><FaGreaterThan className="about-icon"/><strong>phEmailone:</strong><span className='about-span'>email.example.com </span></li>
                    <li><FaGreaterThan className="about-icon"/><strong>Freelance:</strong><span className='about-span'>Available</span></li>
                    </ul>
          </div>
          <p className="about-title-para">Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor 
                    incidunt officia tempore. Et eius omnis. Cupiditate 
                    ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus itaque neque. 
                    Aliquid amet quidem ut quaerat cupiditate. Ab et eum qui repellendus omnis culpa magni laudantium dolores.</p>
            </div>
          </div>
          <h2 className="facts-title">Facts</h2>
          <p className="facts-title-para">Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. 
             Quisquam quos quisquam cupiditate.
            Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
          <div className="skills-catainer">
                    <div className="skill">
                    <SlEmotsmile className="fact-icon"/>
                    <div>
                    <strong className="a-strong">232</strong> <br/>
                    <span className="about-span">Happy Clients</span>
                    <p>consequuntur quae</p>
                    </div>
                    </div>  
          
                    <div className="skill">
                    <BsJournalRichtext className="fact-icon"/>
                    <div>
                    <strong className="a-strong">521</strong> <br/>
                    <span className="about-span">Projects adipisci atque</span>
                    <p>cum quia aut</p>
                    </div>
                    </div>
                    <div className="skill">
            <SlEmotsmile className="fact-icon"/>
            <div>
              <strong className="a-strong">1453</strong> <br/>
              <span className="about-span">Hours Of Support aut</span>
              <p>consequuntur quae</p>
            </div>
          </div> 
          <div className="skill">
            <SlEmotsmile className="fact-icon"/>
            <div>
              <strong className="a-strong">232</strong> <br/>
              <span className="about-span">Happy Clients</span>
              <p>consequuntur quae</p>
            </div>
          </div> 
          </div>
         
     </div>
  )
}

export default AboutSecction