import React, {Component} from 'react';
import movie from './../media/movie.mp4'
import './MirrorVideo.css';

class MirrorVideo extends React.Component {
    componentDidMount(){

    }

    render() {
        return(
        <div id='mirror-video-container'>
            <video id='mirror-video' autoPlay loop muted crossOrigin="anonymous">
                <source src={movie} type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'/>
            </video>
        </div>
        );
    }
  
}
export default MirrorVideo;