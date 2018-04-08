import React, {Component} from 'react';
import * as THREE from 'three';
import * as TrackballControls from 'three-trackballcontrols';
import './Canvas.css';
import spaceImage from './../media/space.jpg';
import movie from './../media/movie.mp4';
import moviePoster from './../media/poster.png'
import { VideoPlane } from './../scripts/VideoPlanes'
import { scene } from './../scripts/Scene'

var moveDirection = 0;
var location;
var planeFocus;
var plane1 = new VideoPlane(moviePoster ,movie);
var plane2 = new VideoPlane(moviePoster ,movie);
var plane3 = new VideoPlane(moviePoster ,movie);
var plane4 = new VideoPlane(moviePoster ,movie);

export class Canvas extends Component {
    constructor(props){
        super(props);
        this.state = {location: ''}//url location
        this.sceneMove = this.sceneMove.bind(this);
    }

    // - Tell React To Rerender (MAY NOT BE NEEDED)
    sceneMove(newLocation){
        this.setState({
            location: newLocation
        })
    }

    //React Render
    render(){
        planeFocus = this.props.focus;
        //set movedirection based on url (testing will be removed later)
        if(this.props.path == 'about' || this.props.path == 'contact'){
            moveDirection = 0.01;
        }
        else{
            moveDirection = -0.01;
        }

        return(
            <div>
                <div id='canvas-container'></div>
                <p>Canvas Thinks you are in: {this.props.path}</p>  
            </div>
        );
    }

    //On Component Load
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
var camera, fakeCamera, renderer;//visual vars
var geometry, material, controls, mesh, spacesphere;//scene vars
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
    camera.position.z = 4;
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
    material = new THREE.MeshNormalMaterial(); 
    mesh = new THREE.Mesh( geometry, material );
    scene.add( mesh );

    //Video Planes\\
    plane1.addToScene();
    plane1.mesh.position.x = -3.7
    //plane1.mesh.lookAt(camera.position)
    
    plane2.addToScene();
    plane2.mesh.position.x = -1.5
    //plane2.mesh.lookAt(camera.position)

    plane3.addToScene();
    plane3.mesh.position.x = 1.5
    //plane3.mesh.lookAt(camera.position)

    plane4.addToScene();
    plane4.mesh.position.x = 3.7
    //plane4.mesh.lookAt(camera.position)

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

// - Animation loop
var qm = new THREE.Quaternion();
//camera.quaternion = qm;
//camera.quaternion.normalize();

function animate() {
    requestAnimationFrame( animate );

    //Orbit Controls for Development
    if(DEV_CONTROLS) controls.update();

    //Logic Animation
    var desiredFocus;
    if(planeFocus === '/about'){
        desiredFocus = plane1.mesh;
        //camera.lookAt(plane1.mesh.position);
    }
    else if(planeFocus === '/experience'){
        desiredFocus = plane2.mesh;
        //camera.lookAt(plane2.mesh.position);
    }
    else if(planeFocus === '/projects'){
        desiredFocus = plane3.mesh;
        //camera.lookAt(plane3.mesh.position);
    }
    else if(planeFocus === '/contact'){
        desiredFocus = plane4.mesh;
        //camera.lookAt(plane4.mesh.position);
    }
    else if(planeFocus === '/'){
        desiredFocus = mesh;
        //camera.lookAt(mesh.position);
    }

    //Smooth camera transition example (TO BE IMPORVED ON LATER!!!!)
    fakeCamera.lookAt(desiredFocus.position);
    var test = new THREE.Quaternion().copy( fakeCamera.quaternion );

    console.log(fakeCamera.quaternion)
    
    camera.quaternion.slerp( test, 0.5 );
    desiredFocus.position.y += 0.005;

    //Static Animations
    //mesh.rotation.y += moveDirection;
    spacesphere.rotation.y += 0.0005;

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