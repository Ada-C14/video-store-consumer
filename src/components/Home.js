import React from 'react';
import './Home.css';
import limabean from '../LimaBean.jpg';

const Home = () => {
  return (
    <div className='home'>
      <h2>Leema Bean's Video Store</h2>
      <img src={limabean} alt="limabean" className='limabean'/>
    </div>
  )
};

export default Home;