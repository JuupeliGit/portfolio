import { useEffect, useState } from 'react';
import './Slideshow.css';

import icon_previous from '../assets/navigate_before_white_24dp.svg';
import icon_next from '../assets/navigate_next_white_24dp.svg';

function Slideshow(props) {

    const [index, setIndex] = useState(0);

    const slideshowScroll = () => {
        if (index === props.slides.length - 1)
            return setIndex(0);

        return setIndex(index + 1);
    }

    useEffect(() => {
        const interval = setInterval(() => { slideshowScroll() }, props.time)
        return () => clearInterval(interval)
    });

    return (
        <div className='Slideshow'>
            <div className='Slideshow-content'
                style={{ transform: `translateX(-${index * 100}%)` }}>
                {props.slides.map((slide, i) =>
                    <img key={slide + i} src={slide} className='Slideshow-image'></img>
                )}
            </div>
            <div className='Slideshow-dots'>
                {props.slides.map((slide, i) =>
                    <button key={slide + i}
                        className={`Slideshow-dot ${index === i ? 'active' : ''}`}
                        onClick={() => setIndex(i)}></button>
                )}
            </div>
        </div>
    );
}

export default Slideshow;