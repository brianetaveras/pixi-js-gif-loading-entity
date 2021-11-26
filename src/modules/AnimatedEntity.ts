import Entity from "./Entity";
import * as SuperGif from "libgif";
import * as PIXI from 'pixi.js'

class AnimatedEntity extends Entity {
    sprite: PIXI.AnimatedSprite
    constructor(data, app){
        super(data, app);
    }

    create() {
        const {image, x, y} = this.data;
        const tmpImgElement = document.createElement("img");
        tmpImgElement.src = image;

        const gifProcessor = new SuperGif({gif: tmpImgElement});

        gifProcessor.load(() => {
            const frames = gifProcessor.get_frames();
            const textureArray = [];

            frames.forEach(frame => {
                const frameImage: ImageData = frame.data;
                const tmpCanvas = document.createElement("canvas");
                const ctx = tmpCanvas.getContext("2d");

                ctx.putImageData(frameImage, 0, 0);

                const imageUrl = tmpCanvas.toDataURL();

                const texture = PIXI.Texture.from(imageUrl);

                textureArray.push(texture);
            });


            this.sprite = new PIXI.AnimatedSprite(textureArray);
            this.sprite.x = x;
            this.sprite.y = y;
            // Need to find a way to do this dynamically
            this.sprite.animationSpeed = .5;
            this.sprite.play();
            this.app.stage.addChild(this.sprite);
            

        })
    }

}

export default AnimatedEntity