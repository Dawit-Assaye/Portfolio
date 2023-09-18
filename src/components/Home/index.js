import './index.scss'
import { Link } from 'react-router-dom';
import Dawit from '../../assets/images/Dawit.png'
import { useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';

const Home = () => {
    const[letterClass,setLetterClass] = useState ('text-animate')
    const nameArray = ['a','w','i','t']
    const jobArray= ['w','e','b', ' ','d','e','v','e','l','o','p','e','r', '.'] 
    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>Hi, <br />I'm
                <img src={Dawit} alt="developer"/>
                <AnimatedLetters letterClass={letterClass}
                strArray={nameArray}
                idx={15} />
                <br />
                    web developer
                </h1>
                <h2>Fullstack Developer/ Java Expert / Photographer</h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>
        </div>
    );
}
export default Home