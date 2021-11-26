import Renderer from './modules/Renderer';
import AnimatedEntity from "./modules/AnimatedEntity";
import './style.css'
const app = document.querySelector<HTMLDivElement>('#app');

const gameRenderer = new Renderer({appContainer: app});


new AnimatedEntity({
    image: "https://media4.giphy.com/media/Ju7l5y9osyymQ/200.gif",
    x: (gameRenderer.app.view.width / 2) - 200,
    y: (gameRenderer.app.view.height / 2) - 165
}, gameRenderer.app)