import './VideoShow.css';
import React from 'react';

const VideoShow = ({video, videoSelected}) => {
    return (
        <div onClick={() => videoSelected(video)} className="video-show item">
            <img className="ui image" 
            src={video.snippet.thumbnails.medium.url} 
            alt={video.snippet.title} />
            <div className="content">
                <div className="header" >{video.snippet.title}</div>
            </div>
        </div>);
};

export default VideoShow;