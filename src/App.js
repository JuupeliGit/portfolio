import { useRef, useState } from 'react';

import './App.css';

import Header from './Header';
import Footer from './Footer';

import Home from './Home';
import About from './About';
import Portfolio from './Portfolio';

import portfolioCards from './portfolio/content';

function App() {

  const refHome = useRef(null);
  const refAbout = useRef(null);
  const refPortfolio = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null)
  ];
  const refContacts = useRef(null);

  const scrollTo = [
    event => scrollToRef(event, refHome),
    event => scrollToRef(event, refAbout),
    [
      event => scrollToRef(event, refPortfolio[0]),
      event => scrollToRef(event, refPortfolio[1]),
      event => scrollToRef(event, refPortfolio[2]),
      event => scrollToRef(event, refPortfolio[3])
    ],
    event => scrollToRef(event, refContacts)
  ];

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxSrc, setLightboxSrc] = useState('');

  function scrollToRef(event, ref) {
    ref.current?.scrollIntoView();
  }

  function openLightbox(src) {
    setLightboxSrc(src);
    setLightboxOpen(true);
  }

  function closeLightbox() {
    setLightboxSrc('');
    setLightboxOpen(false);
  }

  return (
    <div className='App'>
      <div ref={refHome} className='App-column'>
        <Header scrollTo={scrollTo} />
        <Home scrollToPortfolio={scrollTo[2][0]} />
        <div className='App-content'>
          <About refProp={refAbout} />
          <Split />
          <Portfolio
            refProp={refPortfolio}
            content={portfolioCards}
            setLightboxOpen={openLightbox}
          />
        </div>
        <Footer refProp={refContacts} />
      </div>
      <Lightbox
        open={lightboxOpen}
        close={closeLightbox}
        src={lightboxSrc}
      />
    </div>
  );
}

function Split() {
  return (
    <div className='App-split'></div>
  );
}

function Lightbox({ open, close, src }) {
  return (
    <div className={`App-lightbox ${!open ? 'Hidden' : ''}`}
      onClick={close}>
      <img src={src}></img>
    </div>
  );
}

export default App;
