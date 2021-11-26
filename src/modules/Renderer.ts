import * as PIXI from 'pixi.js';
import Entity from './Entity';

type RendererConstructorObjectArgs = {
    appContainer: HTMLElement
}

class Renderer {
    public app: PIXI.Application;
    public renderer: PIXI.Renderer|PIXI.AbstractRenderer;
    private entities;
    constructor({appContainer}: RendererConstructorObjectArgs) {
        this.app = new PIXI.Application();
        this.renderer = this.app.renderer;
        appContainer.append(this.app.view);
        this.entities = {};

        this.startGameloop();

        
    }



    private startGameloop(){
        this.app.ticker.add(() => {
            for (let entity in this.entities) {
                this.entities[entity].update();
            }
        })
    }

    public addObject(entity: Entity){
        this.entities[entity.data.id] = entity;
    }


}

export default Renderer;