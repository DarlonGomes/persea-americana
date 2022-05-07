import ReactDOM from 'react-dom';
import Navbar from './Nav';
import Corpo from './Body';
import Fundo from './Fundo';

function App (){
    return (
        <div>
            <Navbar />
            <Corpo />
            <Fundo />
        </div>
    )
}

const app = App();
ReactDOM.render(app, document.querySelector(".root"));