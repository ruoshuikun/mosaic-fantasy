import {HashRouter as Router, Route, Link} from 'react-router-dom'
import Header from './components/Layout/Header'
import Home from './pages/Home'
import Market from './pages/Market'
import WhiteBook from './pages/WhiteBook'

function App() {
    return (
        <Router>
            <div className="App">
                <Header/>
                <div className='main'>
                    <Route path="/home" component={Home}/>
                    <Route path="/market" component={Market}/>
                    <Route path="/white-book" component={WhiteBook}/>
                </div>
            </div>
        </Router>
    );
}

export default App;
