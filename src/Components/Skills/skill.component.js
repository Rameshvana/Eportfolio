import './skill.component.css'
import Progressbar from "../progress_bar";
import WithLabelExample from '../progress_bar';


const SkillComponent =  () => {
  return(
    <div className='skill-card'>
      <h1 className='skill-title'>Skills</h1>
      <p className='skill-para'>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. 
          Sit sint consectetur velit. Quisquam quos quisquam cupiditate.
           Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.
      </p>
      <div className=' skill-content'>
        <div >
          <div>
            <strong>HTML</strong>
            <WithLabelExample now={100}/>
          </div>
          <div>
            <strong>CSS</strong>
            <WithLabelExample now={90}/>
          </div>
          <div>
            <strong>JAVASCRIPT</strong>
            <WithLabelExample now={75}/>
          </div>
          <div>
          <div>
            <strong>PHP</strong>
            <WithLabelExample now={100}/>
          </div>
          <div>
            <strong>WORDPRESS/CMD</strong>
            <WithLabelExample now={90}/>
          </div>
          <div>
            <strong>PHOTOSHOP</strong>
            <WithLabelExample now={75}/>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SkillComponent