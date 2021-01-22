import React from 'react';
import poster1 from './space_jam.jpg'
import poster2 from './10_things.jpg'
import poster3 from './shes_all_that.jpg'
import banner from './90sbb.png'
import './Home.css'


const Home = () => {
  return (
  <div>
    <h1>Welcome!</h1>
    <h3>Been craving the days of rewinding a vhs cassette? Untangeling a twisted tape roll?</h3>
    <h4>Well, dig out your vhs player & watch all the classics, delivered to your door!</h4>
    <h4><em>Join today!</em></h4>
    <br></br>
    <section>
      <img src={banner} className="banner w-25" alt="90s montage" />
    </section>
    <br></br>
    <h4><em>New Releases Coming Soon!</em></h4>
    <img src={poster1} className="poster" alt="Space Jam Movie Poster" />
    <img src={poster2} className="poster" alt="10 Things Movie Poster" />
    <img src={poster3} className="poster" alt="She's All That Movie Poster" />
    <section className="spacer" />
  </div>  
  )
}
  
  export default Home;    