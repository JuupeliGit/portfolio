import './Footer.css';

import icon_link0 from './assets/itchio-logo-textless-white.svg';
import icon_link1 from './assets/GitHub-Mark-Light-120px-plus.png';
import icon_link2 from './assets/LI-In-Bug.png';

function Footer(props) {
    return (
        <div ref={props.refProp} className='Footer'>
            <div style={{ flex: 1 }}>
                <p>
                    Thanks for taking the time to check out my portfolio!
                </p>
                <p>
                    You can also find me on these platforms.
                </p>
            </div>
            <div className='Footer-button-wrap' style={{ flex: 4 }}>
                <FooterButton link='https://juupeli.itch.io/' icon={icon_link0} title='Itch.io' />
                <FooterButton link='https://github.com/JuupeliGit' icon={icon_link1} title='GitHub' />
                <FooterButton link='https://www.linkedin.com/in/juho-laukka-935346258/' icon={icon_link2} title='LinkedIn' />
            </div >
        </div >
    );
}

function FooterButton({ link, icon, title }) {
    return (
        <div className='Footer-button'>
            <a href={link} target='_blank' className='Footer-button-link'>
                <img src={icon}></img>
            </a>
            <p>{title}</p>
        </div>
    );
}

export default Footer;