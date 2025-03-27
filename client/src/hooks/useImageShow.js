import { useState } from "react";

export const useImageShow = () => {

    const [ imageUrl, setImageUrl ] = useState('');
    const [ showImage, setShowImage ] = useState(false);

    const imageClickHandler = (e) => {
        const imageUrl = e.target.src;
        setImageUrl(imageUrl);
        setShowImage(true);
    };

    const backdropClickHandler = () => {
        setImageUrl('');
        setShowImage(false);
    };

    return {
        imageClickHandler,
        backdropClickHandler,
        showImage,
        imageUrl
    }
}