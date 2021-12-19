import React from "react";
import {Link} from 'react-router-dom'
import './index.scss'

class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isActive: 0,
            navData: [
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
                    path: '/white-book'
                },
                {
                    name: 'Help',
                    path: '/help'
                },
                {
                    name: 'My Wallet',
                    path: '/my-wallet'
                },
                // {
                //     name: 'Learn More',
                //     path: '/learn-more'
                // },
            ]
        }
    }

    jump({item, index}) {
        // const headerDom = document.getElementById('header')
        // let background = '#000'
        // if (item.path === '/home') {
        //     background = 'rgba(0, 0, 0, 0.3)'
        // } else {
        //     background = '#000'
        // }
        // headerDom.style.background = background

        this.setState({
            isActive: index
        })
    }

    render() {

        const navData = this.state.navData
        return (
            <nav>
                {
                    navData.map((item, index) =>
                        <span
                            key={index}
                            className={`header-main-item`}
                            onClick={() => this.jump({item, index})}
                        >
                            <Link to={item.path}
                                  className={`${index === this.state.isActive ? "active" : null}`}>{item.name}</Link>
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
            <div className='header' id='header'>
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
