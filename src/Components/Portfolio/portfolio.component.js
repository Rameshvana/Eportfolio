import './portfolio.component.css'

const PortfolioComponent = () => {
   return(
     <div className='portfolio-card'>
       <h1 className='portfo-title'>Portfolio</h1>
       <p className='portfo-para'>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. 
       Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
       <div>
         <ul className='portfolio-flters'>
           <button className='filter'>All</button>
           <button className='filter'>APP</button>
           <button className='filter'>CARD</button>
           <button className='filter'>WEB</button>
         </ul>
         <div className='images-card'>
         <img src="https://bootstrapmade.com/demo/templates/iPortfolio/assets/img/portfolio/portfolio-1.jpg" class="img-fluid" alt=""/>
         <img src='https://bootstrapmade.com/demo/templates/iPortfolio/assets/img/portfolio/portfolio-2.jpg' className='img-fluid' alt=''/>
         <img src='https://bootstrapmade.com/demo/templates/iPortfolio/assets/img/portfolio/portfolio-3.jpg' className='img-fluid' alt=''/>
         <img src='https://bootstrapmade.com/demo/templates/iPortfolio/assets/img/portfolio/portfolio-4.jpg' className='img-fluid' alt=''/>
         <img src='https://bootstrapmade.com/demo/templates/iPortfolio/assets/img/portfolio/portfolio-5.jpg' className='img-fluid' alt=''/>
         <img src='https://bootstrapmade.com/demo/templates/iPortfolio/assets/img/portfolio/portfolio-6.jpg' className='img-fluid' alt=''/>
         <img src='https://bootstrapmade.com/demo/templates/iPortfolio/assets/img/portfolio/portfolio-7.jpg' className='img-fluid' alt=''/>
         <img src='https://bootstrapmade.com/demo/templates/iPortfolio/assets/img/portfolio/portfolio-8.jpg' className='img-fluid' alt=''/>
         <img src='https://bootstrapmade.com/demo/templates/iPortfolio/assets/img/portfolio/portfolio-9.jpg' className='img-fluid' alt=''/>
         </div>
       </div>
     </div>
   )
}

export default PortfolioComponent