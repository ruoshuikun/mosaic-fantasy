import {BrowserRouter, Route, Link} from 'react-router-dom'
import Header from './components/Layout/Header'
import Home from './pages/Home'
import LearnMore from './pages/LearnMore'

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <div className='main'>
                    <Route path="/home" component={Home}/>
                    <Route path="/learn-more" component={LearnMore}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
