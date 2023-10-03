import { Route, Routes } from "react-router-dom";
import Gallery from "../Components/Gallery/Gallery";
import GalleryDetails from "../Components/GalleryDetails/GalleryDetails";

function CustomRouter(){
    return(
        <Routes>
            <Route path="/" element={<Gallery />} /> 
            <Route path="/gallery/:id" element={<GalleryDetails />} /> 
        </Routes>
    );
}

export default CustomRouter;