import * as THREE from 'three'
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import gsap from 'gsap'
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
//creating scene
const scene = new THREE.Scene()
scene.background = new THREE.Color(0x568FFF)
//selecting canvas
const canvas = document.querySelector('canvas.webgl')
//declaring camera
const camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight)
scene.add(camera)
camera.position.z=10
//creating orbit control
//const controls = new OrbitControls(camera,canvas)
//light
const ambiantlight = new THREE.AmbientLight(0xffffff,1.5)
scene.add(ambiantlight)     
//3D 
const GltfLoader = new GLTFLoader()
GltfLoader.load("/rifle.glb",function(gltf){
  scene.add(gltf.scene)
  gltf.scene.scale.x = 10
  gltf.scene.scale.y = 10
  gltf.scene.scale.z = 10
  gltf.scene.position.z = -5
  gltf.scene.rotation.y = -4.58
  gsap.fromTo(gltf.scene.rotation,{
    y:-4.58,
    x:0,
  },{
    y:-3.1,
    x:0.3,
    scrollTrigger:{
       
      start: "400vh center",
      end : "600vh center",
      scrub:3,
    }
  })
  gsap.fromTo(gltf.scene.rotation,{
    x:0.3,
  },{
    x:0.6,
    scrollTrigger:{
       
      start: "600vh center",
      end : "650vh center",
      scrub:3,
    }
  })
  gsap.fromTo(camera.rotation,{
    x:0.3,
  },{
    x:0.6,
    scrollTrigger:{
       
      start: "650vh center",
      end : "700vh center",
      scrub:3,
    }
  })
  gsap.fromTo(camera.position,{
    x:0,
  },{
    x:1,
    scrollTrigger:{
      start: "650vh center",
      end : "700vh center",
      scrub:3,
    }
  })
  gsap.fromTo(camera.position,{
    z:0,
  },{
    z:-9,
    scrollTrigger:{
      
      start: "700vh center",
      end : "1000vh center",
      scrub:6,
    }
  })
})
GltfLoader.load("/bull.glb",function(gltf){
  scene.add(gltf.scene)
  gltf.scene.scale.set(0.4,0.4,0.4)
  gltf.scene.position.z=-8
  gltf.scene.position.y=3
  gltf.scene.position.x=-.2
  gltf.scene.rotation.y=-55
  gltf.scene.rotation.z=-95.55
  gltf.scene.rotation.x=2
  gsap.fromTo(gltf.scene.scale,{
    z:0,
    y:0,
    x:0,
  },{
    z:0,
    y:0,
    x:0,
    scrollTrigger:{
       
      start: "0vh center",
      end : "750vh center",
    }
  })
  gsap.fromTo(gltf.scene.scale,{
    z:0.4,
    y:0.4,
    x:0.4,
  },{
    z:0.4,
    y:0.4,
    x:0.4,
    scrollTrigger:{
       
      start: "750vh center",
      end : "850vh center",
      scrub:3,
    }
  })
  gsap.fromTo(gltf.scene.position,{
    z:-8,
    y:3,
  },{
    z:-10,
    y:4.7,
    scrollTrigger:{
       
      start: "750vh center",
      end : "850vh center",
      scrub:6,
    }
  })
  
})
GltfLoader.load("/wizard_room.glb",function(gltf){
  scene.add(gltf.scene)
  gltf.scene.position.z = -15
  gltf.scene.position.y = 4
  gltf.scene.position.x = -1
  gltf.scene.rotation.x = -18
  gsap.fromTo(gltf.scene.scale,{
    z:0,
    y:0,
    x:0,
  },{
    z:1,
    y:1,
    x:1,
    scrollTrigger:{
       scrub:3,
      start: "820vh center",
      end : "1500vh center",
    }
  })
  
})
GltfLoader.load("wizard.glb",function(gltf){
  scene.add(gltf.scene)
  gltf.scene.scale.set(.9,.9,.9)
  gltf.scene.position.z = 8
  gltf.scene.position.y = -19
  gltf.scene.position.x = 15
  gltf.scene.rotation.x = -18.2
  gltf.scene.rotation.y = -1.45
  gsap.fromTo(camera.rotation,{
    y:0,
  },{
    y:-2,
    scrollTrigger:{
      start:"1500vh center",
      end:"1700vh center",
      scrub:6,
    }
  })
  gsap.fromTo(camera.position,{
    x : 1,
  },{
    x : 13,

    scrollTrigger:{
      start:"1700vh center",
      end:"1900vh center",
      scrub:6,
    }})
})
//RENDERING
window.onresize = function(){
  renderer.setSize(window.innerWidth,window.innerHeight)
}
const renderer = new THREE.WebGL1Renderer({
  canvas : canvas,
})
renderer.setSize(window.innerWidth,window.innerHeight)
renderer.render(scene,camera)
//fct for animation
const clock = new THREE.Clock();
const tick = () => {
  const elapsedTime = clock.getElapsedTime();
  renderer.render(scene, camera);
  window.requestAnimationFrame(tick);
};
tick();
const dynamicText = document.querySelector("h1 span");
const words = ["Web<D>eveloppers", "Art", "The Future", "Everything"];
// Variables to track the position and deletion status of the word
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typeEffect = () => {
    const currentWord = words[wordIndex];
    const currentChar = currentWord.substring(0, charIndex);
    dynamicText.textContent = currentChar;
    dynamicText.classList.add("stop-blinking");
    if (!isDeleting && charIndex < currentWord.length) {
        // If condition is true, type the next character
        charIndex++;
        setTimeout(typeEffect, 200);
    } else if (isDeleting && charIndex > 0) {
        // If condition is true, remove the previous character
        charIndex--;
        setTimeout(typeEffect, 100);
    } else {
        // If word is deleted then switch to the next word
        isDeleting = !isDeleting;
        dynamicText.classList.remove("stop-blinking");
        wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
        setTimeout(typeEffect, 1200);
    }
}
typeEffect();



document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("nav a");

  function activateNav() {
      let current = "";

      sections.forEach(section => {
          const sectionTop = section.offsetTop - 100;
          if (window.scrollY >= sectionTop) {
              current = section.getAttribute("id");
          }
      });

      navLinks.forEach(link => {
          link.classList.remove("active");
          if (link.getAttribute("href").includes(current)) {
              link.classList.add("active");
          }
      });
  }

  window.addEventListener("scroll", activateNav);
});