import * as THREE from 'three';
import React from 'react'
import ReactDOM from 'react-dom';
import movie from './../media/movie.mp4'
import {scene} from './Scene'

export class VideoPlane {
    constructor(video_poster ,video_src) {
        //Define video poster placeholder
        this.video_poster = video_poster;
        //Create html video element
        this.video = document.createElement('video');
        //Define video properties
        this.video.className = 'video-texture';
        this.video.autoplay = true;
        this.video.src = video_src;
        this.video.muted = true;
        this.video.loop = true;
        //Three.js object parameters
        this.texture = new THREE.TextureLoader().load(this.video_poster);
        this.texture.minFilter = THREE.LinearFilter;
        this.texture.magFilter = THREE.LinearFilter;
        this.texture.format = THREE.RGBFormat;
        this.material = new THREE.MeshPhongMaterial();
        this.material.map = this.texture;
        this.video_geometry = new THREE.PlaneGeometry( 2, 3, 0 );
        //Three.js object
        this.videoPlane = new THREE.Mesh( this.video_geometry, this.material );
        this.videoPlane.material.side = THREE.DoubleSide;
        //Bind reference required functions
        this.setVideoTexture = this.setVideoTexture.bind(this);
        //Check if device is mobile
        if(!window.isDeviceMobile){
            //Replace video poster with video when loaded
            this.video.addEventListener('loadedmetadata', this.setVideoTexture);
        }
    }

    // - Replace videoPlane Texture with Video
    setVideoTexture(){
        this.texture = new THREE.VideoTexture( this.video );
        this.texture.minFilter = THREE.LinearFilter;
        this.texture.magFilter = THREE.LinearFilter;
        this.texture.format = THREE.RGBFormat;
        this.material.map = this.texture;
        this.material.needsUpdate = true
        this.material.map.needsUpdate = true;
    }

    // - Add Video Plane THREE Object To Scene
    addPlane(){
        scene.add(this.videoPlane);
    }
}