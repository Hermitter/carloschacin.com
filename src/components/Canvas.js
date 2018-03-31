//Initial Vars
import * as THREE from 'three';
import './Canvas.css';
import spaceTexture from './../media/space.jpg';
var camera, scene, renderer;
var geometry, material, mesh;

//////////////////////////////////
// Event Listeners
/////////////////////////////////
window.addEventListener( 'resize', onWindowResize, false );

//////////////////////////////////
// Functions
/////////////////////////////////
function init() {
    //camera\\
    camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.01, 10 );
    camera.position.x = 0; 
    camera.position.y = 0; 
    camera.position.z = -15; 
    
    //scene\\
    scene = new THREE.Scene();
 
    geometry = new THREE.BoxGeometry( 0.2, 0.2, 0.2 );
    material = new THREE.MeshNormalMaterial();
 
    mesh = new THREE.Mesh( geometry, material );
    scene.add( mesh );

    //space sphere
    //var spacetex = THREE.ImageUtils.loadTexture(spaceTexture);
    var spacetex = new THREE.TextureLoader().load(spaceTexture);
    var spacesphereGeo = new THREE.SphereGeometry(20,20,20);
    var spacesphereMat = new THREE.MeshPhongMaterial();
    spacesphereMat.map = spacetex;
  
    var spacesphere = new THREE.Mesh(spacesphereGeo,spacesphereMat);
    
    //spacesphere needs to be double sided as the camera is within the spacesphere
    spacesphere.material.side = THREE.DoubleSide;
    
    spacesphere.material.map.wrapS = THREE.RepeatWrapping; 
    spacesphere.material.map.wrapT = THREE.RepeatWrapping;
    spacesphere.material.map.repeat.set( 5, 3);
    
    scene.add(spacesphere);

    //create two spotlights to illuminate the scene
    var spotLight = new THREE.SpotLight( 0xffffff ); 
    spotLight.position.set( -40, 60, -10 ); 
    spotLight.intensity = 2;
    scene.add( spotLight );

    var spotLight2 = new THREE.SpotLight( 0x5192e9 ); 
    spotLight2.position.set( 40, -60, 30 ); 
    spotLight2.intensity = 1.5;
    scene.add( spotLight2 );

    //renderer\\
    renderer = new THREE.WebGLRenderer( { antialias: true } );
    renderer.setSize( window.innerWidth, window.innerHeight );
    renderer.domElement.id = 'canvas';

    document.getElementById('canvas-container').appendChild(renderer.domElement);
 
}
 
// - Animation loop
function animate() {
    requestAnimationFrame( animate );

    camera.position.z += 0.01;

    mesh.rotation.x += 0.01;
    mesh.rotation.y += 0.02;
 
    renderer.render( scene, camera );
 
}

// - Starts canvas animation
function start(){
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

export {start}