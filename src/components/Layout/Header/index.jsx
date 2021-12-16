import React from "react";
import {BrowserRouter, Route, Link} from 'react-router-dom'
import './index.scss'

class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isActive: 0
        }
    }

    jump({item, index}) {
        this.setState({
            isActive: index
        })
    }

    render() {

        const navData = [
            {
                name: 'Home',
                path: '/home'
            },
            {
                name: 'Market',
                path: '/market'
            },
            {
                name: 'Assets',
                path: '/assets'
            },
            {
                name: 'MF Mining',
                path: '/mf-mining'
            },
            {
                name: 'Whitebook',
                path: '/whitebook'
            },
            {
                name: 'Help',
                path: '/help'
            },
            {
                name: 'My Wallet',
                path: '/my-wallet'
            },
            {
                name: 'Learn More',
                path: '/learn-more'
            },
        ]
        return (
            <nav>
                {
                    navData.map((item, index) =>
                        <span
                            key={index}
                            className={`header-main-item`}
                            onClick={() => this.jump({item, index})}
                        >
                            <Link to={item.path} className={`${index === this.state.isActive ? "active" : null}`}>{item.name}</Link>
                        </span>
                    )
                }
            </nav>
        )
    }
}

export default class Header extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {

        return (
            <div className='header'>
                <div className='header-main'>
                    <div className='header-main-logo'>
                        <img src={require('../../../assets/img/logo.png')} alt=""/>
                    </div>
                    <Nav/>
                    <div className='header-main-right'>
                        <button>My MF</button>
                    </div>
                </div>
            </div>
        )
    }
}
