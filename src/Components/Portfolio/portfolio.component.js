import { useState } from 'react'
import './portfolio.component.css'

const languageFiltersData = [
  { id: 'ALL', language: 'All' },
  { id: 'APP', language: 'APP' },
  { id: 'CARD', language: 'CARD' },
  { id: 'WEB', language: 'WEB' }
]

const images_tin = [
  {
    id: 'APP',
    image_url: 'https://bootstrapmade.com/demo/templates/iPortfolio/assets/img/portfolio/portfolio-1.jpg'
  },
  {
    id: 'APP',
    image_url: 'https://bootstrapmade.com/demo/templates/iPortfolio/assets/img/portfolio/portfolio-3.jpg'
  },
  {
    id: 'APP',
    image_url: 'https://bootstrapmade.com/demo/templates/iPortfolio/assets/img/portfolio/portfolio-6.jpg'
  },
  {
    id: 'WEB',
    image_url: 'https://bootstrapmade.com/demo/templates/iPortfolio/assets/img/portfolio/portfolio-2.jpg'
  },
  {
    id: 'WEB',
    image_url: 'https://bootstrapmade.com/demo/templates/iPortfolio/assets/img/portfolio/portfolio-5.jpg'
  },
  {
    id: 'WEB',
    image_url: 'https://bootstrapmade.com/demo/templates/iPortfolio/assets/img/portfolio/portfolio-9.jpg'
  },
  {
    id: 'CARD',
    image_url: 'https://bootstrapmade.com/demo/templates/iPortfolio/assets/img/portfolio/portfolio-4.jpg'
  },
  {
    id: 'CARD',
    image_url: 'https://bootstrapmade.com/demo/templates/iPortfolio/assets/img/portfolio/portfolio-7.jpg'
  },
  {
    id: 'CARD',
    image_url: 'https://bootstrapmade.com/demo/templates/iPortfolio/assets/img/portfolio/portfolio-8.jpg'
  },
]
console.log(images_tin.length)



const PortfolioComponent = () => {

  const [language, setLanguage] = useState('ALL');
  const [imges, setimeges] = useState(images_tin)

  function Hello(id) {
    setLanguage(id)
    if (id == 'ALL') {
      setimeges(images_tin)
    } else {
      let filter_imeges = images_tin.filter((a) => a.id == id)

      setimeges(filter_imeges)

    }
  }



  return (
    <div className='portfolio-card'>
      <h1 className='portfo-title'>Portfolio</h1>
      <div className='p-3'>
        <p className='portfo-para'>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate.
          Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        <div>
          <ul className='portfolio-flters'>
            {languageFiltersData.map((each) => <button type='button' className={language == each.id ? 'filter filter_dynamic' : 'filter'}
              onClick={() => { Hello(each.id) }}>{each.language}</button>)}
          </ul>
          <div className='images-card'>
            {imges.map((img) =>
              <img src={img.image_url} className='img-fluid' alt='' />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default PortfolioComponent