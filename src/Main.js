import * as THREE from "three"
import ModLoader from "./ModLoader"

export default class Main {
  constructor() {
    this.scene = new THREE.Scene()
    this.camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 )
    this.renderer = new THREE.WebGLRenderer()
    this.renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( this.renderer.domElement );
    // this.addCube()
    this.camera.position.z = 5;
    console.log("worked")
    this.modLoader = new ModLoader(this.camera, this.scene, this.renderer)
    this.modLoader.loadMods()
    this.render()
  }
  // addCube() {
  //   var geometry = new THREE.BoxGeometry( 1, 1, 1 );
  //   var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
  //   var cube = new THREE.Mesh( geometry, material );
  //   this.scene.add( cube );

  // }
  render() {
    requestAnimationFrame( () => this.render() );
    this.renderer.render( this.scene, this.camera );
  }
}
