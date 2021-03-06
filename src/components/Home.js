import React from 'react';
import { Link } from 'react-router-dom';
import AppNav from './AppNav';
import '../App.css';
import CatalogoListContainer from '../containers/CatalogoListContainer';
import Slider from './Slider';

const Home = () => {

    return(
        <div className='App'>
            <AppNav/>
            
            <header className='App-header'>
                
                {/* <h1>Labs Challenge</h1> */}
                <h2>¡Bienvenidos a Henry Store!</h2>
                 <CatalogoListContainer/>  
            </header>
        </div>
    );
    
}

export default Home;