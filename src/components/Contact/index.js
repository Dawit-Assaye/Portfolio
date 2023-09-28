import './index.scss'
import { useState, useEffect } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import Loader from 'react-loaders';
    
const Contact = () => {
    const[letterClass,setLetterClass]=useState("text-animate")

    useEffect(() => {
        const timeoutId = setTimeout(() => {
          setLetterClass('text-animate-hover-about')
        }, 3000)
    
        // Clear the timeout when the component unmounts
        return () => clearTimeout(timeoutId)
    }, [])

    return (
        <>
        <div className="container contact-page">
            <div className="text-zone">
                    <h1>
                        <AnimatedLetters
                            strArray={["C", "o", "n", "t", "a", "c", "t", " ", "m", "e"]}
                            idx={15}
                            letterClass={letterClass}
                        />
                    </h1>        
                    <p>
            I am interested in freelance opportunities - especially on ambitious
            or large projects. However, if you have any other requests or
            questions, don't hesitate to contact me using below form either.
          </p>
                <div className='contact-form'>
                    <form>
                        <ul>
                            <li className='half'>
                                <input placeholder='Name' type='text' name='name' required/>
                            </li>
                            <li className='half'>
                                <input placeholder='Email' type='email' name='email' required/>
                            </li>
                            <li>
                                <input placeholder='Subject' type='text' name='subject' required/>
                            </li>
                            <li>
                                <textarea placeholder='Message' name='message' required>
                                </textarea>
                                </li>
                                <li>
                                    <input type='submit' value={'SEND'} className='flat-button'/>
                                </li>
                        </ul>
                    </form>

                </div>
                </div>
        </div>
            <Loader type='pacman'/>
        </>
);
}
export default Contact