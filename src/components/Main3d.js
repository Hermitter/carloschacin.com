//Initial Vars
import * as THREE from 'three'
import './Main3d.css'
var camera, scene, renderer;
var geometry, material, mesh;
var container = document.getElementById('canvas-container');

//////////////////////////////////
// Event Listeners
/////////////////////////////////
window.addEventListener( 'resize', onWindowResize, false );

//test dimensions log
setInterval(function(){
    // console.log('Div innerWidth: '+document.getElementById('canvas-container').clientWidth);
    // console.log('canvas innerWidth: '+document.getElementById('canvas').clientWidth);
},1000);

function onWindowResize(){
    //camera adjust for resize
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    //renderer adjust for resize
    renderer.setSize( window.innerWidth, window.innerHeight );

}

//////////////////////////////////
// Functions
/////////////////////////////////
function init() {
    //camera
    camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.01, 10 );
    camera.position.z = 1;
    
    //scene
    scene = new THREE.Scene();
 
    geometry = new THREE.BoxGeometry( 0.2, 0.2, 0.2 );
    material = new THREE.MeshNormalMaterial();
 
    mesh = new THREE.Mesh( geometry, material );
    scene.add( mesh );
 
    //renderer
    renderer = new THREE.WebGLRenderer( { antialias: true } );
    renderer.setSize( window.innerWidth, window.innerHeight );
    renderer.domElement.id = 'canvas';

    document.getElementById('canvas-container').appendChild(renderer.domElement);
 
}
 
function animate() {
 
    requestAnimationFrame( animate );
 
    mesh.rotation.x += 0.01;
    mesh.rotation.y += 0.02;
 
    renderer.render( scene, camera );
 
}

function start(){
    init();
    animate();
}

export {start}