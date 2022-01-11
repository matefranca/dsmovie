import {ReactComponent as StarFull} from 'Assets/images/star-full.svg';
import {ReactComponent as StarHalf} from 'Assets/images/star-half.svg';
import {ReactComponent as StarEmpty} from 'Assets/images/star-empty.svg';
import './styles.css';

function MovieStars() {
    return (
        <div className="dsmovie-stars-container">
            <StarFull />
            <StarFull />
            <StarFull />
            <StarHalf />
            <StarEmpty />
        </div>
    );
}

export default MovieStars;