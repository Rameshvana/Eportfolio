import { BsBriefcase,BsBinoculars ,BsBrightnessHigh,BsCalendar4Week    } from "react-icons/bs";
import { BsCardChecklist } from "react-icons/bs";
import { FaChartSimple } from "react-icons/fa6";
import './service.component.css'

const ServiceComponent = () => {
  return(
   <div>
      <h1 className='service-title'>Services</h1>
      <p className='service-para'>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
       Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
       <div className="row mt-5">
         <div className="col-4">
         <div>
          <BsBriefcase className="service-icon"/>
          <div>
             <h4 className="service-head">Lorem Ipsum</h4> 
             <p className="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>      
          </div>
       </div>  
       <div>
          < BsBinoculars    className="service-icon"/>
          <div>
             <h4 className="service-head">Magni Dolores</h4> 
             <p className="description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborumt</p>      
          </div>
       </div>
         </div>
         <div className="col-4">
         <div>
          < BsCardChecklist className="service-icon"/>
          <div>
             <h4 className="service-head">Dolor Sitema</h4> 
             <p className="description">Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata</p>      
          </div>
       </div>  
       <div>
          <BsBrightnessHigh  className="service-icon"/>
          <div>
             <h4 className="service-head">Nemo Enim</h4> 
             <p className="description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque</p>      
          </div>
       </div>
         </div>
         <div className="col-4">
         <div>
          <FaChartSimple className="service-icon"/>
          <div>
             <h4 className="service-head">Sed ut perspiciatis</h4> 
             <p className="description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>      
          </div>
       </div>  
       <div>
          <BsCalendar4Week ase className="service-icon"/>
          <div>
             <h4 className="service-head">Eiusmod Tempor </h4> 
             <p className="description">Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi</p>      
          </div>
       </div>
         </div>
       
       </div>
       <h1 className='service-title'>Testimonials</h1>
      <p className='service-para'>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate.
       Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>

   
   </div>
  )
}

export default ServiceComponent