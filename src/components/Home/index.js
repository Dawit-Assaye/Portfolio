import './index.scss'
import { Link } from 'react-router-dom';
import Dawit from '../../assets/images/Dawit.png'

const Home = () => {
    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>Hi, <br />I'm
                <img src={Dawit} alt="developer"/>
                awit
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