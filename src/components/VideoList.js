import React from 'react';
import VideoShow from './VideoShow'

const VideoList = ({videos, videoSelected}) => {
    const renderedList = videos.map( video => {
        return <VideoShow key={video.id.videoId} videoSelected={videoSelected} video={video}  />
    })
    return (
        <div className="ui relaxed divided list">{renderedList}</div>
    )
}

export default VideoList;