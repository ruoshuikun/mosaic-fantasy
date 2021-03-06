import {HashRouter as Router, Route, Redirect} from 'react-router-dom'
import Header from './components/Layout/Header'
import Home from './pages/Home'
import Market from './pages/Market'
import MarketMosaic from './pages/Market/Mosaic'
import MarketDetail from './pages/Market/Detail/detail'
import MarketKingKongWill from './pages/Market/KingKongWill'
import MarketKingKongWillDetail from './pages/Market/KingKongWill/Detail'
import Homepage from './pages/Market/Homepage/index'
import Mining from './pages/Mining'
import WhiteBook from './pages/WhiteBook'
import Community from './pages/Community'
import CommunityDetail from './pages/Community/detail/detail'
import Assets from './pages/Assets'

function App() {
    return (
        <Router>
            <div className="App">
                <Header/>
                <div className='main'>
                    {/*<Redirect path="/" to="/home" />*/}
                    <Route path="/home" component={Home}/>
                    <Route path="/market" component={Market}/>
                    <Route path="/market/mosaic" component={MarketMosaic}/>
                    <Route path="/market/detail" component={MarketDetail}/>
                    <Route path="/market/king-kong-will" component={MarketKingKongWill}/>
                    <Route path="/market/king-kong-will-detail" component={MarketKingKongWillDetail}/>
                    <Route path="/market/homepage" component={Homepage}/>
                    <Route path="/mining" component={Mining}/>
                    <Route path="/white-book" component={WhiteBook}/>
                    <Route path="/community" component={Community}/>
                    <Route path="/community-detail" component={CommunityDetail}/>
                    <Route path="/assets" component={Assets}/>
                </div>
            </div>
        </Router>
    );
}

export default App;
