// Import the THREE.js library
import * as THREE from "https://cdn.skypack.dev/three@0.129.0/build/three.module.js";
// To allow for the camera to move around the scene
import {
    OrbitControls
} from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/controls/OrbitControls.js";
import {
    GLTFLoader
} from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js";
import {
    MeshStandardMaterial
} from "../node_modules/three/build/three.module.js"

let object1;

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
        object1.position.set(0, 0, 0); // Position the first object
    },
    function (xhr) {
        console.log((xhr.loaded / xhr.total * 100) + '% loaded');
        console.log("First object loaded");
    },
    function (error) {
        console.error(error);
    }
);

const meatTexture = new THREE.TextureLoader().load('meat.png');

const meat = new THREE.Mesh(
    new THREE.SphereGeometry(2, 32, 32), // Smaller radius and segment counts
    new MeshStandardMaterial({
        map: meatTexture
    })
);

meat.position.z = 0;
meat.position.y = 10;
meat.position.x = -15;

scene.add(meat);

const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(5, 5, 5);
const ambientLight = new THREE.AmbientLight(0xffffff);

scene.add(pointLight, ambientLight);

const controls = new OrbitControls(camera, renderer.domElement);

function animate() {
    requestAnimationFrame(animate);

    controls.update();

    renderer.render(scene, camera);
}

animate();