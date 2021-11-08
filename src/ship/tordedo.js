import Sprite from "../sprite.js";
export default class Torpedo extends Sprite {
	//Mini asteroid from asteroid explosion
	constructor(speed, ...args) {
		super(...args);
		this.speed = speed;
		this.image = document.getElementById("torpedo");
		this.delete = false; //Once an item needs to be deleted and stop rendering, set to true
		this.height = 20;
		this.width = 10;
		this.radius = 10;
	}
	update(deltaTime) {
		//Add special update code here if needed
		super.update();
	}
	explode(){
		//fun explosion stuff
		// this.delete = true;
	}
}