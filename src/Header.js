import { useState } from 'react';
import './Header.css';

import icon_menu from './assets/menu_white_24dp.svg';

function Header(props) {

    const [showNav, setShowNav] = useState(false);

    function toggleNav() {
        setShowNav(!showNav);
    }

    return (
        <div className='Header'>
            <div className='Header-nav'>
                <button onClick={props.scrollTo[0]} className='Header-nav-button'>
                    Home
                </button>
                <button onClick={props.scrollTo[1]} className='Header-nav-button'>
                    About
                </button>
                <div className='Header-nav-dropdown'>
                    <button onClick={props.scrollTo[2][0]} className='Header-nav-button'>
                        My Work
                    </button>
                    <div className='Header-nav-dropdown-content'>
                        <button onClick={props.scrollTo[2][1]} className='Header-nav-dropdown-button'>
                            Games & Unity
                        </button>
                        <button onClick={props.scrollTo[2][2]} className='Header-nav-dropdown-button'>
                            Android
                        </button>
                    </div>
                </div>
                <button onClick={props.scrollTo[3]} className='Header-nav-button'>
                    Find Me
                </button>
            </div>

            <div>
                <button onClick={toggleNav} className='Header-nav-icon'>
                    <img src={icon_menu} />
                </button>
            </div>

            {showNav ?
                <div className='Header-nav-mobile'>
                    <button onClick={() => { props.scrollTo[0](); toggleNav(); }} className='Header-nav-button'>
                        Home
                    </button>
                    <button onClick={() => { props.scrollTo[1](); toggleNav(); }} className='Header-nav-button'>
                        About
                    </button>
                    <button onClick={() => { props.scrollTo[2][0](); toggleNav(); }} className='Header-nav-button'>
                        My Work
                    </button>
                    <button onClick={() => { props.scrollTo[3](); toggleNav(); }} className='Header-nav-button'>
                        Find_Me
                    </button>
                </div>
                :
                <div></div>
            }
        </div>
    );
}

export default Header;