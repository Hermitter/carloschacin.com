import React, {Component} from 'react';
import * as THREE from 'three';
import * as TrackballControls from 'three-trackballcontrols';
import './Canvas.css';
import spaceImage from './../media/space.jpg';
import spaceImage2 from './../media/space2.jpg';
import {VideoPlane} from './VideoPlanes'
//import {Scene} from './Scene'

var moveDirection = 0;

export class Canvas extends Component {
    constructor(props){
        super(props);
        this.state = {location: ''}
        this.sceneMove = this.sceneMove.bind(this);
    }

    sceneMove(newLocation){
        this.setState({
            location: newLocation
        })
    }

    render(){
        if(this.props.path == 'home')
            moveDirection = 0.01;
        else
            moveDirection = -0.01;

        return(
            <div>
                <div id='canvas-container'></div>
                <p>Canvas Thinks you are in: {this.props.path}</p>  
            </div>
        );
    }

    componentDidMount(){
        startCanvas();//Render Three.js Scene
    }
}


//////////////////////////////////
// Event Listeners
/////////////////////////////////
window.addEventListener( 'resize', onWindowResize, false );


//////////////////////////////////
// Functions
/////////////////////////////////
var camera, scene, renderer;
var geometry, material, controls, mesh, spacesphere, mirror;
var DEV_CONTROLS = false;
function init() {
    //////////////////////////////////
    //CAMERA\\
    camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.01, 1000 );
    if(DEV_CONTROLS)
        controls = new TrackballControls( camera );//controls for Development!

    camera.position.x = 0;
    camera.position.y = 0;
    camera.position.z = 4;
    
    //////////////////////////////////
    //SCENE\\
    scene = new THREE.Scene();
 
    //mirror\\
    // var mirror_texture = new THREE.VideoTexture( mirror_video );
    // //var mirror_texture = new THREE.TextureLoader().load(spaceImage);
    // mirror_texture.minFilter = THREE.LinearFilter;
    // mirror_texture.magFilter = THREE.LinearFilter;
    // mirror_texture.format = THREE.RGBFormat;

    // var mirror_geometry = new THREE.PlaneGeometry( 2, 3, 0 );
    // var mirror_material = new THREE.MeshPhongMaterial();
    // mirror_material.map = mirror_texture;

    // mirror = new THREE.Mesh( mirror_geometry, mirror_material );
    // mirror.material.side = THREE.DoubleSide;

    // scene.add(mirror);

    //space sphere\\
    var spacetex = new THREE.TextureLoader().load( spaceImage );
    var spacesphereGeo = new THREE.SphereGeometry(40,40,40);
    var spacesphereMat = new THREE.MeshPhongMaterial();
    spacesphereMat.map = spacetex;
  
    spacesphere = new THREE.Mesh( spacesphereGeo, spacesphereMat );
    
    spacesphere.material.side = THREE.DoubleSide;//make material double sided
    spacesphere.material.map.wrapS = THREE.RepeatWrapping;//horizontal texture wrap
    spacesphere.material.map.wrapT = THREE.RepeatWrapping;//vertical texture wrap
    spacesphere.material.map.repeat.set( 5, 3 );//amount of texture repeats
    spacesphere.position.set( 0, 0, 0 );//texture start location
    scene.add(spacesphere);
    
    //spining cube\\
    geometry = new THREE.BoxGeometry( 0.2, 0.2, 0.2 );
    material = new THREE.MeshNormalMaterial(); 
    mesh = new THREE.Mesh( geometry, material );
    scene.add( mesh );

    //create two spotlights to illuminate the scene
    var spotLight = new THREE.SpotLight( 0xffffff ); 
    spotLight.position.set( -40, 90, -10 ); 
    spotLight.intensity = 2;
    scene.add( spotLight );

    var spotLight2 = new THREE.SpotLight( 0x5192e9 ); 
    spotLight2.position.set( 40, -90, 30 ); 
    spotLight2.intensity = 1.5;
    scene.add( spotLight2 );

    //////////////////////////////////
    //RENDERER\\
    renderer = new THREE.WebGLRenderer( { antialias: true } );
    renderer.setSize( window.innerWidth, window.innerHeight );
    renderer.domElement.id = 'canvas';

    document.getElementById('canvas-container').appendChild(renderer.domElement);
 
}
 
// - Animation loop
function animate() {
    requestAnimationFrame( animate );

    if(DEV_CONTROLS)
        controls.update();//controls for Development!

    //mirror.rotation.x += 0.005;
    //mirror.rotation.y += 0.005
    //mirror.rotation.z += 0.005

    spacesphere.rotation.y += 0.0005;
 
    
    mesh.rotation.y += 0.02;
    //mesh.position.y += 0.01;
    //camera.lookAt(mesh.position);
 
    //camera.rotation.x += moveDirection;
    renderer.render(scene, camera);
    //console.log(camera.position.x+' '+camera.position.y+' '+camera.position.z);//camera pos(x,y,z)
}

// - Starts canvas animation
function startCanvas(params){
    init();
    animate();
}

// - Events to fire on browser window resize
function onWindowResize(){
    //camera adjust for resize
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    //renderer adjust for resize
    renderer.setSize( window.innerWidth, window.innerHeight );

}