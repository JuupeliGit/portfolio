import './Home.css';

import './components/Slideshow';
import Slideshow from './components/Slideshow';

function Home(props) {

    const images = [
        'https://img.itch.zone/aW1hZ2UvNjkzODc1LzM4NDQ4MTcucG5n/original/kJzURp.png',
        '/images/MtG Wallpaper.jpg',
        '/images/MtG Wallpaper.jpg',
        '/images/MtG Wallpaper.jpg',
        '/images/MtG Wallpaper.jpg',
    ];

    return (
        <div ref={props.refProp} className='Home'>
            <div className='Home-banner'>
                <div className='Home-banner-slides'>
                    <Slideshow slides={images} time={4000} />
                </div>
                <div className='Home-banner-welcome'>
                    <h1>Welcome to my portfolio</h1>
                    <div className='Home-banner-button-wrap'>
                        <button onClick={props.scrollToPortfolio} className='Home-banner-button'>
                            Check out My Work
                        </button>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Home;