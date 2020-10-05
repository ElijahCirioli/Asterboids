class Bullet {
	constructor(x, y, velX, velY) {
		this.pos = new Vec(x, y);
		this.vel = new Vec(velX, velY);
		this.life = 80;
		this.hBoxRad = 3;
	}

	move = () => {
		this.pos.x += this.vel.x;
		this.pos.y += this.vel.y;
		this.life--;
	};
}
