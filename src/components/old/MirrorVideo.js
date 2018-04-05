import React, {Component} from 'react';
import movie from './../media/movie.mp4'
import movie2 from './../media/movie2.mp4'
import './MirrorVideo.css';

class MirrorVideo extends React.Component {
    constructor(props) {
        super(props);
        // create a ref to store the textInput DOM element
        this.textInput = React.createRef();
        this.focusTextInput = this.focusTextInput.bind(this);
    }

    focusTextInput() {
        // Explicitly focus the text input using the raw DOM API
        // Note: we're accessing "current" to get the DOM node
        this.textInput.current.focus();
    }

    componentDidMount(){
        setTimeout(function(){
            //document.getElementById('mirror-video').setAttribute('src', {movie2})
            console.log(document.getElementById('mirror-video'));
        },3000)
    }

    render() {
        return(
        <div id='mirror-video-container'>
            <video src={movie2} id='mirror-video' autoPlay loop muted crossOrigin="anonymous">
                {/* <source src={movie} type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'/> */}
            </video>
        </div>
        );
    }
  
}
export default MirrorVideo;