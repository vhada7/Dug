import React from 'react';
import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CurrentDrawGraph from '../Components/CurrentDrawGraph';
import VoltageDrawGraph from '../Components/VoltageDrawGraph';


const Home = () => {
    return ( 
        <div id="home" className='content content-center'>
            <div className="home-content">
               <CurrentDrawGraph />
               <VoltageDrawGraph />
        </div>
        </div>
    );
}
 
export default Home;