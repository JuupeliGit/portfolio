import { useEffect, useRef, useState } from 'react';
import './About.css';

function About(props) {
    const [isVisible, setIsVisible] = useState(false);
    const containerRef = useRef(null);

    function callBackFunction(entries) {
        const [entry] = entries;
        if (!isVisible) {
            setIsVisible(entry.isIntersecting);
        }
    }

    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.75
    };

    useEffect(() => {
        const observer = new IntersectionObserver(callBackFunction, options);
        observer.observe(props.refProp.current);
        return () => {
            observer.unobserve(props.refProp.current);
        }
    }, [props.refProp, options]);

    return (
        <div ref={props.refProp} className='About'>
            <h2>About</h2>
            <div className='About-table'>
                <div className='About-table-column' style={{ flex: 5 }}>
                    <p>
                        I'm a young, aspiring software developer student at OUAS located in Oulu Finland.
                        My current studies have made me familiar with variety of programming languages and platforms.
                        I also specialized in web design and animation during my past studies in audiovisual production.
                        I'm now finishing up my current studies and looking to be employed.
                    </p>
                    <p>
                        In addition to programming, my interests also include video game design, drawing and painting (both digital and traditional), and tabletop games.
                    </p>
                    <p>

                        This portfolio contains some of my school projects, as well as stuff I've made during my free time.
                    </p>
                </div>
                <div className='About-table-column' style={{ flex: 2 }}>
                    <div className='About-profile'>
                        <img src='/images/Juho_New.png'></img>
                    </div>
                </div>
            </div >

            <div className='About-background'>

            </div>
        </div >
    );
}

export default About;