import React from 'react';
import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from '../Components/Sidebar'




const Home = () => {
    return ( 
        <div id="home" className='content content-center'>
            <Sidebar />
            <div className="home-content">
                <h1>Home</h1>
                <p>Home page body content</p>
        </div>
    );
}
 
export default Home;