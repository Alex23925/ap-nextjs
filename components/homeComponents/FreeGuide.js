import styles from "../../styles/home-styles/free-guide.scss"

function FreeGuide() {
    return (
        <div className="free-guide-container">
            <h1 className="free-guide-title free-guide-title--styles">
                Request Your Free Guide!
            </h1>
            <div className="free-guide-btn-container">
                <button className="free-guide-btn free-guide-btn--styles">
                    Request Now!
                </button>
            </div>
        </div>
    );
}

export default FreeGuide;