import * as PIXI from 'pixi.js';

type EntityData = {
    x: number,
    y: number,
    width: number,
    height: number,
    id: string,
    image: string
}

class Entity {
    public sprite: PIXI.Sprite
    public app: any;
    public data: EntityData
    constructor(data: EntityData, app){
        
        this.app = app;
        this.data = data;
        this.create()

    }

    create(){
        const {id, image, x, y, width, height} = this.data;
        this.app.loader.add(id, image).load((_, resources) => {
            this.sprite = new PIXI.Sprite(resources[id].texture);
            this.sprite.x = x;
            this.sprite.y = y;
            this.sprite.width = width;
            this.sprite.height = height;

            this.app.stage.addChild(this.sprite);
        })
    }

    update(){
        console.log(`updated entity ${this.data.id}`)
    }

}

export default Entity