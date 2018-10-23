import React, {Component} from 'react';
import * as THREE from 'three';
import * as TrackballControls from 'three-trackballcontrols';
import './Canvas.css';
import { scene } from './Scene.js'
import spaceImage from './../media/space.jpg';

var canvas_setting = '';

export class Canvas extends Component {
    constructor(props){
        super(props);
        this.state = {canvas_setting: ''}// url location
    }

    // - On Component Load
    componentDidMount(){
        startCanvas();//Render Three.js Scene
    }

    // - On New Props
    componentWillReceiveProps(props) {
        // If a new setting is set
        if(canvas_setting !== this.props.setting){
            console.log(this.props.setting);//log current url
            // If url hasn't changed
            if(this.state.canvas_setting !== this.props.setting){
                // Update url_path state
                this.setState({
                    canvas_setting: this.props.setting
                });
                // Update global canvas setting
                canvas_setting = this.props.setting;
            }
        }
    }

    render(){
        return(
            <div>
                <div id='canvas-container'></div>
            </div>
        );
    }
}

//////////////////////////////////
// Event Listeners
/////////////////////////////////
window.addEventListener( 'resize', onWindowResize, false );

//////////////////////////////////
// Functions
/////////////////////////////////
var camera, fakeCamera, renderer;//visual vars
var geometry, material, controls, homePoint, spacesphere;//scene vars
var DEV_CONTROLS = false;//orbit controls
function init() {
    //////////////////////////////////
    //CAMERA\\
    camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.01, 1000 );
    fakeCamera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.01, 1000 );

    if(DEV_CONTROLS)
        controls = new TrackballControls( camera );//controls for Development!

    camera.position.x = 0;
    camera.position.y = 0;
    camera.position.z = 7;
    //follow main camera position
    fakeCamera.position.z = camera.position.z;
    
    //////////////////////////////////
    //SCENE\\
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
    material = new THREE.MeshNormalMaterial({alphaTest : 1}); 
    homePoint = new THREE.Mesh( geometry, material );
    scene.add( homePoint );

    //Space Illumination
    var spotLight = new THREE.SpotLight( 0xffffff ); 
    spotLight.position.set( -40, 90, -10 ); 
    spotLight.intensity = 2;
    scene.add( spotLight );

    var spotLight2 = new THREE.SpotLight( 0x5192e9 ); 
    spotLight2.position.set( 40, -90, 30 ); 
    spotLight2.intensity = 1.5;
    scene.add( spotLight2 );
    //Video Planes Illumination
    var spotLight3 = new THREE.PointLight( 0xffffff ); 
    spotLight3.position.set( 0, 0, 4 ); 
    spotLight3.intensity = 1;
    //scene.add( spotLight3 );

    //////////////////////////////////
    //RENDERER\\
    renderer = new THREE.WebGLRenderer( { antialias: true } );
    renderer.setSize( window.innerWidth, window.innerHeight );
    renderer.domElement.id = 'canvas';

    document.getElementById('canvas-container').appendChild(renderer.domElement);
}

//////////////////////////////////
//ANIMATION\\
function animate() {
    requestAnimationFrame( animate );

    //Orbit Controls for Development
    if(DEV_CONTROLS) {controls.update()};

    //Static Animations
    if(canvas_setting === '/')
        spacesphere.rotation.y += 0.0005;
    else if(canvas_setting === '/blog')
        spacesphere.rotation.z -= 0.0005;

    //Render Scene
    renderer.render(scene, camera);
}

// - Starts canvas animation
function startCanvas(){
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