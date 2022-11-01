import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I've Done</h5>
      <h2>Work</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Backend Developer, SBT Media (now Digimii)</h3>
          </div>

          <ul className='service__list'>
            <li>
              <p>Working in a small team and also in direct contact with clients, 
                helping small and medium-sized businesses with building and maintaining web applications using .NET.
              </p>
            </li>
            <li>
              <p>Importing and exporting data between enterprise systems and web applications using SQL Server and Entity Framework.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>C#</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>VB.NET</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Entity Framework</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>SQL Server</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>JavaScript</p>
            </li>
          </ul>
        </article>
        {/* END OF UI/UX */}
        <article className="service">
          <div className="service__head">
            <h3>Startup: Social Media App</h3>
          </div>

          <ul className='service__list'>
            <li>
              <p>Started building a social media app for backpackers. It used Xamarin and Google maps to help backpackers
                find each other in remote areas.
              </p>
            </li>
            <li>
              <p>But a very similar app was released by HostelWorld.com, wich stopped me building.</p>
            </li>
            <li>
              <p>I built a first iteration of the app: news feed, map, chat, login and profile.</p>
            </li>
            

            <li>
              <BiCheck className='service__list-icon' />
              <p>Azure:</p>
            </li>
            <li>
              <p>Cosmos DB SQL API, Stored procedures, 
                Blob storage, Azure Functions, Azure SignalR service and Azure DevOps.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Xamarin.Forms</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>MVVM</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Prism</p>
            </li>
          </ul>
        </article>
        {/* WEB DEVELOPMENT */}
        <article className="service">
          <div className="service__head">
            <h3>Hobby projects</h3>
          </div>
          <ul className='service__list'>
            <li>
              <p>I always try to improve my skills in .NET, with things such as 
                better structure and design patterns in my code. 
                But I also learn new technologies.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Angular</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>React</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Unity</p>
            </li>
          </ul>
        </article>
        {/* END OF CONTENT CREATION */}
      </div>
    </section>
  )
}

export default Services