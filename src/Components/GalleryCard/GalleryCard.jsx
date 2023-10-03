import { Link } from 'react-router-dom';
import './GalleryCard.css'
function GalleryCard({ image, id }) {
    return (
        <Link to={`gallery/${id}`}>
            <div className="galleryCard-wrapper">
                <div className='cardImageBox'>
                    <img
                        className='galleryCardImage'
                        src={image}
                    />
                </div>
            </div>
        </Link>
    );
}

export default GalleryCard;