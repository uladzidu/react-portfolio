import logo from './logo.svg';
import appStyle from './App.module.scss';
import {Header} from "./components/Header/Header";
import {Main} from "./components/Main/Main";

function App() {
    return (
        <div className={appStyle}>
            <Header/>
            <Main/>
        </div>
    );
}

export default App;
