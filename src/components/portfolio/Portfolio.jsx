import React from 'react'
import './portfolio.css'
import xamarinforms_news from '../../assets/xamarinforms_news.png'
import chat_random4 from '../../assets/chat_random4.jpeg'
import ang2 from '../../assets/angular-img1.jpeg'
import IMG4 from '../../assets/react-core.png'
import GamePlay from '../../assets/GamePlay2.jpg'
import IMG6 from '../../assets/portfolio6.jpg'

// DO NOT USE THE IMAGES IN PRODUCTION

const data = [
  {
    id: 1,
    image: xamarinforms_news,
    title: 'News feed part of the social media app in Xamarin.Forms',
    github: 'https://github.com',
    demo: 'https://github.com/niklas-ekstein/Xamarin-news-feed'
  },
  {
    id: 2,
    image: chat_random4,
    title: 'Chat part of the social media app in Xamarin.Forms',
    github: 'https://github.com',
    demo: 'https://github.com/niklas-ekstein/Xamarin-chat'
  },
  {
    id: 3,
    image: ang2,
    title: 'Webshop in Angular with .NET core backend (Not finished)',
    github: 'https://github.com',
    demo: 'https://github.com/niklas-ekstein/Skinet'
  },
  {
    id: 4,
    image: IMG4,
    title: 'First project I built in React, has a .NET backend',
    github: 'https://github.com',
    demo: 'https://github.com/niklas-ekstein/First-React-Project/tree/master'
  },
  {
    id: 5,
    image: GamePlay,
    title: 'A RPG game I built while learning Unity a while ago',
    github: 'https://www.youtube.com/watch?v=M6EQll_jsw0',
  }
]


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className='btn btn-primary' target='_blank'>Check it</a>
              </div>
            </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio