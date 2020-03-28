import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'


const Home = () => (
  <div>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/child.ico" />
    </Head>
      <Nav/>
      <div className="bg">
      <div className="bg2">
        <div className="hero">
            <h1 className="title">Hello Napat</h1>
              <p className="description"> </p>
                <img src="bot.jpg" alt="New" width="300" height="350"></img>
                <div className="row">
                  <a href="https://nextjs.org/docs" className="card"> <h3>My Resume</h3> </a>
                  <a href="https://nextjs.org/learn" className="card"> <h3>My Project</h3> </a>
                  <a href="https://github.com/zeit/next.js/tree/master/examples" className="card"> <h3>My Skills</h3> </a>
                </div>
        </div>
      </div>
    </div>
    <style jsx>{`
    :global(body) {
      margin: 0;
      font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
        Helvetica, sans-serif;
    }
      .hero {
        width: 100%;
        color: #333;
      }
      .title {
        margin: 0;
        width: 100%;
        padding-top: 80px;
        line-height: 1.15;
        font-size: 48px;
        color: white;
      }
      .title,
      .description {
        text-align: center;
      }

      img {
        max-width: 880px;
        border-radius: 45%;
        margin: 80px auto 30px;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
      }
      .row {
        max-width: 880px;
        margin: 70px auto 40px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
      }
      .card {
        background-color: #2c3e50;
        border-radius: 12px;
        border: none;
        color: white;
        padding: 15px 32px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        margin: 4px 2px;
        cursor: pointer;
      }
      .card:hover {
        border-color: #067df7;
      }
      .card h3 {
        margin: 0;
        color: white;
        font-size: 18px;
      }
      .card p {
        margin: 0;
        padding: 12px 0 0;
        font-size: 13px;
        color: #333;
      }
      .bg{
        width : 100%;
        height : 100%;
        background-position: 50%;
        background-size: cover;
        background-attachment: fixed%;
        background-image: url('https://miro.medium.com/max/11400/1*lS9ZqdEGZrRiTcL1JUgt9w.jpeg');
        
      }
      .bg2{
        padding: 50px;
        background-color: rgba(0,0,0,.8);
      }
    `}</style>
  </div>
)

export default Home
