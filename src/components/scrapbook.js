import React from 'react';
import './scrapbook.css';
import imageData from './images_data';
import ScrapbookImage from './scrapbook_image';


export default props=>{
    const image =imageData.map((images,index)=>{
        return <ScrapbookImage key={index} about={images}/>
    })
    return(
        <div className="scrapbook-container">
        {image}
        </div>
    )
}