import grass from './grass.png';
import './larva.scss';
const Worm = () => {
    return (
        <div className="worm">
            <div className="face">
                <div className="white_eye"></div>
                <div className="black_eye"></div>
            </div>
            <div className="body1">
                <div className="body2"></div>
                <div className="body3"></div>
                <div className="body4"></div>
            </div>
            <img src={grass} />
        </div>
    );
}
export default Worm;