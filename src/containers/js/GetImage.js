import Todoer from '../../images/todoer_architecture.jpg';
import Portfolio from '../../images/portfolio_architecture.jpg';
import Scratch from '../../images/notes_scratch.jpg';
import Burger from '../../images/burger_builder_amplify_deploy.jpg';


let images = {
    Todoer,
    Portfolio,
    Scratch,
    Burger
};

function GetImage(key) {
    return images[key];
}

export default GetImage;