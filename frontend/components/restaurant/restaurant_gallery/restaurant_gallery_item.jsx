import React, { useState } from 'react';
import LazyLoad from "react-lazyload";

export const GalleryItem = (props) => {

    const { url } = props;
    const [loaded, setLoaded] = useState(false);
    const imgObj = new Image();
    imgObj.onload = () => { setLoaded(true) }
    imgObj.src = url;

    return (
        <div className="gallery-item">
            {loaded ?
                <img src={`${url}`} width="242" height="281" /> : null
            }
        </div>
    )
}