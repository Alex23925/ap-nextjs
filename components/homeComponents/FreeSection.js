import styles from "../../styles/home-styles/free-section.scss";

import FreeAssistance from "./FreeAssistance";
import FreeRegistration from "./FreeRegistration";

function FreeSection() {
    return (
        <div className="free-section-container">
            <FreeAssistance />
            <FreeRegistration />
        </div>
    );
}

export default FreeSection;