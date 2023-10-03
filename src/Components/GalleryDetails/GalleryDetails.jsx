import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './GalleryDetails.css'
function GalleryDetails() {
    const { id } = useParams();
    const [galleryDetail, setGalleryDetail] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    async function fetchGalleryDetail() {
        setIsLoading(true);
        const response = await axios.get(`https://api.slingacademy.com/v1/sample-data/photos/${id}`);
        console.log(response?.data?.photo);
        const galleryResult = response?.data?.photo;
        setGalleryDetail(galleryResult);
        setIsLoading(false);
    }
    console.log(galleryDetail);
    useEffect(() => {
        fetchGalleryDetail();
    }, []);
    return (
        <div className="gallery-detail-wrapper">
            {
                isLoading
                    ?
                    (
                        <div className="custom-loader"></div>
                    )
                    :

                    (
                        galleryDetail && 
                        <div className="gallery-box-wrapper">
                            <div>
                                <img className="gallery-box-image" src={galleryDetail.url} />
                            </div>
                            <div className="gallery-box-content">
                                <h2 className="gallery-box-heading">{galleryDetail.title}</h2>
                                <p className="gallery-box-desc">{galleryDetail.description}</p>
                            </div>
                        </div>
                    )
            }
        </div>
    );
}

export default GalleryDetails;