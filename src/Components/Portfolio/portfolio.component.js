import { useState } from 'react'
import './portfolio.component.css'

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'APP', language: 'APP'},
  {id: 'CARD', language: 'CARD'},
  {id: 'WEB', language: 'WEB'}
]

const PortfolioComponent = () => {
  const [language, setLanguage] = useState('ALL');

  function Hello(id){
    setLanguage(id)
  }
  
  

  return (
    <div className='portfolio-card'>
      <h1 className='portfo-title'>Portfolio</h1>
      <div className='p-3'>
        <p className='portfo-para'>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate.
          Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        <div>
          <ul className='portfolio-flters'>
            {languageFiltersData.map((each) => <button type='button' className={language== each.id ? 'filter filter_dynamic' : 'filter' } 
                     onClick={() => {Hello(each.id)}}>{each.language}</button>)}
          </ul>
          <div className='images-card'>
            <img src="https://bootstrapmade.com/demo/templates/iPortfolio/assets/img/portfolio/portfolio-1.jpg" class="img-fluid" alt="" /> 
            <img src='https://bootstrapmade.com/demo/templates/iPortfolio/assets/img/portfolio/portfolio-2.jpg' className='img-fluid' alt='' />
            <img src='https://bootstrapmade.com/demo/templates/iPortfolio/assets/img/portfolio/portfolio-3.jpg' className='img-fluid' alt='' />
            <img src='https://bootstrapmade.com/demo/templates/iPortfolio/assets/img/portfolio/portfolio-4.jpg' className='img-fluid' alt='' />
            <img src='https://bootstrapmade.com/demo/templates/iPortfolio/assets/img/portfolio/portfolio-5.jpg' className='img-fluid' alt='' />
            <img src='https://bootstrapmade.com/demo/templates/iPortfolio/assets/img/portfolio/portfolio-6.jpg' className='img-fluid' alt='' />
            <img src='https://bootstrapmade.com/demo/templates/iPortfolio/assets/img/portfolio/portfolio-7.jpg' className='img-fluid' alt='' />
            <img src='https://bootstrapmade.com/demo/templates/iPortfolio/assets/img/portfolio/portfolio-8.jpg' className='img-fluid' alt='' />
            <img src='https://bootstrapmade.com/demo/templates/iPortfolio/assets/img/portfolio/portfolio-9.jpg' className='img-fluid' alt='' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default PortfolioComponent