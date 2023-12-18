import { BsGeoAlt } from "react-icons/bs";
import { BsEnvelope } from "react-icons/bs";
import { IoIosPhonePortrait } from "react-icons/io";

import './contact.component.css'



const ContactComponent = () => {

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
               <div className=' col-6 user-input-card'>
                  <div>
                     <label htmlFor='name'>Your Name</label> <br />
                     <input type='text' name='name' id='name'></input>
                  </div>
                  <div>
                     <label htmlFor='email'>Your Email</label> <br />
                     <input type='text' name='email' id='email'></input>
                  </div>
                  <div>
                     <label id='name'>Subject</label> <br />
                     <input type='text' name='name' id='name'></input>
                  </div>
                  <div>
                     <p><label for="w3review">Message</label></p>
                     <textarea id="w3review" name="w3review" rows="9" cols="55" />

                  </div>
                  <div>
                     <button type='submit' className='submit-btn'>Send Message</button>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default ContactComponent