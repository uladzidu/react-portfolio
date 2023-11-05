import appStyle from './App.module.scss';
import {Header} from "./components/Header/Header";
import {Main} from "./components/Main/Main";
import {Footer} from "./components/Footer/Footer";

function App() {
    return (
        <div className={appStyle}>
            <Header/>
            <Main/>
            <Footer/>
        </div>
    );
}

export default App;
