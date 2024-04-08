
import './EcellMoments.css';
const { default: Gallery } = require("./Gallery");

function EcellMoments(props) {
    return (
        <div className="ecell-moments-container">
            <h1 className="ecell-moments-title">E-CELL MOMENTS</h1>
            <p className="ecell-moments-description">Explore memorable moments from Our annual E-summit event, where aspiring entrepreneurs, industry experts, and innovators come together to inspire and learn</p>
            <Gallery></Gallery>
        </div>
    )
}

export default EcellMoments;