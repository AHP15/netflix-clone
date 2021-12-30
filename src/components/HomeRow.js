import React from 'react';
import "../styles/HomeRow.css";

function HomeRow({title, desc, img, video, large}) {
    return (
        <div className={`row ${!video? "reverse":""}`}>
            <div className='line'></div>
            <div className='background'></div>
            <div className='row_info'>
                <h1>{title}</h1>
                <p>{desc}</p>
            </div>
            <div className='row_media'>
                <img src={img} alt="" />
                {video && (
                    <video className={`${large && "large"}`}  autoPlay playsInline muted loop><source src={video} type="video/mp4"></source></video>
                )}
            </div>
        </div>
    )
}

export default HomeRow;
