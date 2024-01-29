import { BsGeoAlt ,BsEnvelope} from "react-icons/bs";
import { IoIosPhonePortrait } from "react-icons/io";

import './contact.component.css'
import { SaveData } from "../Servicess/userContext";



const ContactComponent = () => {
   

   const cancatUserData = (e) => {
    e.preventDefault();
    console.log(document.getElementById('name').value)
    let name = document.getElementById('name').value
    let email = document.getElementById('email').value
    let subject = document.getElementById('subject').value
    let message = document.getElementById('message').value
  

    const data = {
      name,
      email,
      subject,
      message
    }
    SaveData(data)
    .then((res) => {
      alert('Data Save successfully...')

      document.getElementById('name').value=''
      document.getElementById('email').value=''
      document.getElementById('subject').value=''
      document.getElementById('message').value=''
    })
    .catch(() => {
      alert('Data not Save')
    })
   
   }

   return (
      <div className="contact-card">
         <h1 className='contact-title'>Contact</h1>
         <div className="p-3">
            <p className='service-para'>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate.
               Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
            <div className='row'>
               <div className='col-5 location-card'>
                  <div className="address">
                     <li><BsGeoAlt className="contact-icon" /></li>
                     <div className="mt-3">
                        <h4>Location</h4>
                        <p>A108 Adam Street, New York, NY 535022</p>
                     </div>
                  </div>
                  <div className="address">
                     <li><BsEnvelope className="contact-icon" /></li>
                     <div className="mt-3">
                        <h4>Email</h4>
                        <p>info@example.com</p>
                     </div>
                  </div>
                  <div className="address">
                     <li><IoIosPhonePortrait className="contact-icon" /></li>
                     <div className="mt-3">
                        <h4>Call</h4>
                        <p>+1 5589 55488 55s</p>
                     </div>
                  </div>
                  <div>
                     <h2>Here Goole Maps</h2>

                  </div>
               </div>
               <form className=' col-6 user-input-card' onSubmit={cancatUserData}>
                  <div>
                     <label htmlFor='name'>Your Name</label> <br />
                     <input type='text' name='name' id='name' required></input>
                  </div>
                  <div>
                     <label htmlFor='email'>Your Email</label> <br />
                     <input type='text' name='email' id='email' required></input>
                  </div>
                  <div>
                     <label htmlFor='subject'>Subject</label> <br />
                     <input type='text' name='subject' id='subject' required></input>
                  </div>
                  <div>
                     <p><label htmlFor="message">Message</label></p>
                     <textarea id="message" name="message" rows="9" cols="55" required/>

                  </div>
                  <div>
                     <button type='submit' className='submit-btn' >Send Message</button>
                  </div>
               </form>
            </div>
         </div>
      </div>
   )
}

export default ContactComponent