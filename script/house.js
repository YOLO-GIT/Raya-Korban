// Import the THREE.js library
import * as THREE from "https://cdn.skypack.dev/three@0.129.0/build/three.module.js";
// To allow for the camera to move around the scene
import {
    OrbitControls
} from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/controls/OrbitControls.js";
import {
    GLTFLoader
} from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js";

let object1, object2;

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#bg')
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(50);

// Instantiate a loader for the .gltf files
const loader = new GLTFLoader();

// Load the first .gltf file
loader.load(
    '../3d/scene.gltf',
    function (gltf) {
        object1 = gltf.scene;
        scene.add(object1);
        object1.position.set(-10, 0, 0); // Position the first object
    },
    function (xhr) {
        console.log((xhr.loaded / xhr.total * 100) + '% loaded');
        console.log("First object loaded");
    },
    function (error) {
        console.error(error);
    }
);

// Load the second .gltf file
loader.load(
    '../3d/second_scene.gltf', // Change this to the path of your second .gltf file
    function (gltf) {
        object2 = gltf.scene;
        scene.add(object2);
        object2.position.set(10, 0, 0); // Position the second object
    },
    function (xhr) {
        console.log((xhr.loaded / xhr.total * 100) + '% loaded');
        console.log("Second object loaded");
    },
    function (error) {
        console.error(error);
    }
);

const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(5, 5, 5);
const ambientLight = new THREE.AmbientLight(0xffffff);

scene.add(pointLight, ambientLight);

const controls = new OrbitControls(camera, renderer.domElement);

function animate() {
    requestAnimationFrame(animate);

    // Example of rotating both objects
    if (object1) {
        object1.rotation.y += 0.01;
    }
    if (object2) {
        object2.rotation.y -= 0.01;
    }

    controls.update();

    renderer.render(scene, camera);
}

animate();