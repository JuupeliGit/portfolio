import './Portfolio.css';

const Portfolio = ({ refProp, content, setLightboxOpen }) => {

    return (
        <div ref={refProp[0]} className='Portfolio'>
            <h2>My Work</h2>
            <div className='Portfolio-table'>
                <h3 ref={refProp[1]}>Games & Unity</h3>
                <p>
                    Game development has been one of my hobbies for several years,
                    though I've mostly worked on small projects using Unity for learning purposes.
                    Here's a few I've actually published.
                </p>
                <PortfolioCard content={content[0]} onImageClick={setLightboxOpen} />
                <PortfolioCard content={content[1]} onImageClick={setLightboxOpen} />
                <p>
                    Check out my <a href='https://juupeli.itch.io/'>Ithc.io page</a> for more games I've made.
                </p>
                <h3 ref={refProp[2]}>Android / Java</h3>
                <PortfolioCard content={content[2]} onImageClick={setLightboxOpen} />
                <PortfolioCard content={content[3]} onImageClick={setLightboxOpen} />
                <h3 ref={refProp[3]}>Javascript / React</h3>
                <PortfolioCard content={content[4]} onImageClick={setLightboxOpen} />
            </div>
        </div>
    );
}

const PortfolioCard = ({ content, onImageClick }) => {
    return (
        <div className='Portfolio-table-row'>
            <div className={`Portfolio-table-${content.vertical ? 'column' : 'row'}`} style={{ flex: (content.ratio || 0) }}>
                {content.img && content.img.map((image, i) =>
                    <button
                        key={image + i}
                        className='Portfolio-image'
                        onClick={() => onImageClick(image)}
                    >
                        <img src={image}></img>
                    </button>
                )}
            </div>
            <div className='Portfolio-table-column' style={{ flex: 1 - (content.ratio || 0) }}>
                <h3>{content.title}</h3>
                <p>{content.text}</p>
            </div>
        </div>
    );
}

export default Portfolio;