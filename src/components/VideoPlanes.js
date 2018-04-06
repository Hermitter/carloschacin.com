import * as THREE from 'three';
import movie from './../media/movie.mp4'
import {scene} from './Scene'
import moviePoster from './../media/poster.png'

export class VideoPlane {
    constructor(video_src) {
        //Create html video element
        this.video = document.createElement('video');
        //Define video properties
        this.video.className = 'video-texture';
        this.video.autoplay = true;
        this.video.src = video_src;
        this.video.muted = true;
        this.video.loop = true;
        //Three.js object parameters
        this.texture = new THREE.VideoTexture( this.video );
        this.texture.minFilter = THREE.LinearFilter;
        this.texture.magFilter = THREE.LinearFilter;
        this.texture.format = THREE.RGBFormat;
        this.material = new THREE.MeshPhongMaterial();
        this.material.map = this.texture;
        
        this.video_geometry = new THREE.PlaneGeometry( 2, 3, 0 );
        //Three.js object
        this.videoPlane = new THREE.Mesh( this.video_geometry, this.material );
        this.videoPlane.material.side = THREE.DoubleSide;
    }

    // - Add Video Plane THREE Object To Scene
    addPlane(){
        scene.add(this.videoPlane);
    }
}