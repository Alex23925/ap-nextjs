import styles from "../../styles/home-styles/slogan.scss";


function Slogan() {
    return (
        
        <div className="slogan-section">
            <div className="img-container">
                <img
                    className="book-img"
                    src="/bookLover.png"
                    alt="book lover"
                />
            </div>
            <div className="slogan-container">
                <h1 className="slogan slogan--styles">
                    You write the ENDING. WE DO EVERYTHING!
                </h1>
                <div className="slogan-description-container">
                    <p className="slogan-description slogan-description--styles">
                        At Authors Press, we know the feeling of wanting to have
                        your books and stories shown to the world. We offer
                        different services that will assist aspiring authors in
                        getting their books published and marketed.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Slogan;