import axios from "axios";
import { useEffect, useState } from "react";
import GalleryCard from "../GalleryCard/GalleryCard";
import './Gallery.css';
function Gallery() {
    const [galleryData, setGalleryData] = useState(undefined);
    const [isLoading, setIsLoading] = useState(false);
    async function fetchGalleryImage() {
        setIsLoading(true);
        const response = await axios.get('https://api.slingacademy.com/v1/sample-data/photos'); // Fetch Data
        // console.log(response?.data);
        const galleryResult = response?.data?.photos?.map((item) => item)
        // console.log(galleryResult);
        setGalleryData(galleryResult);
        setIsLoading(false);
    }
    console.log(galleryData);
    useEffect(() => {
        fetchGalleryImage();
    }, []);

    return (
        <div className="gallery-wrapper">
            {isLoading
                ?
                (
                    <div class="custom-loader"></div>
                )
                :

                galleryData && galleryData.map((item) => (
                    <GalleryCard key={item?.id} id={item?.id} image={item?.url} />
                ))
            }
        </div>
    );
}
export default Gallery;