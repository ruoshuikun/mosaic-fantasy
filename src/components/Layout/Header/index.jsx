import React from "react";
import {Link} from 'react-router-dom'
import {connect} from "react-redux"  //connect是一个高阶函数，用于包装一个组件，返回一个新的组件
import {userDispatch as mapDispatchToProps} from "../../../store/actions/index"
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
        sessionStorage.setItem('path', item.path)
        changeBackground()
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

function changeBackground() {
    const headerDom = document.getElementById('header')
    const path = sessionStorage.getItem('path')
    let background = '#000'
    if (path === '/home') {
        background = 'rgba(0, 0, 0, 0.3)'
        headerDom.style.background = background
    } else if (path.includes('/market')) {
        background = 'rgba(0, 0, 0, 0)'
        const rootDom = document.getElementById('root')
        rootDom.style.background = background
        rootDom.style.backgroundImage = `url("${require('../../../assets/img/market/market-back.jpg')}")`
        rootDom.style.backgroundRepeat = 'no-repeat'
        rootDom.style.backgroundPosition = 'center top'
        rootDom.style.backgroundSize = '100vw 100vh'
    } else {
        background = 'rgba(0, 0, 0, 0.3)'
        // headerDom.style.backgroundImage = 'url("../../../assets/img/header-background.png")'
        headerDom.style.backgroundImage = `url("${require('../../../assets/img/header-background.png')}")`
    }
    // headerDom.style.background = background
    // console.log('headerDom.style', headerDom.style)
}

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidUpdate() {
        changeBackground()
    }

    componentWillMount(nextProps, nextState) {
        setTimeout(() => {
            changeBackground()
        })
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
                        <button className='btn btn-confirm ml-small'>Play Now</button>
                        <button className='btn btn-cancel ml-small' onClick={() => {
                            this.props.getUserStatus(!this.props.modalWallet)
                        }}>
                            <span>My Wallet</span>
                        </button>
                    </div>
                </div>
                {/* 弹窗 */}
                {
                    this.props.modalWallet
                        ?
                        <div className='modal-mask-layer'>
                            <div className='modal-wallet'>
                                <div className='modal-wallet-header'>
                                    <span style={{width: '36px'}}/>
                                    <span>Connect to a wallet</span>
                                    <img
                                        className='modal-close'
                                        width='36'
                                        src={require('../../../assets/img/market/close@2x.png')}
                                        alt=""
                                        onClick={() => {
                                            this.props.getUserStatus(!this.props.modalWallet)
                                        }}
                                    />
                                </div>
                                <div className='modal-wallet-main'>
                                    <div className='modal-wallet-main-item' onClick={() => {
                                        this.props.getUserStatus(!this.props.modalWallet)
                                    }}>
                                        <img width='24' src={require('../../../assets/img/market/metamask@2x.png')}
                                             alt=""/>
                                        <span>MetaMask</span>
                                    </div>
                                    <div className='modal-wallet-main-item' onClick={() => {
                                        this.props.getUserStatus(!this.props.modalWallet)
                                    }}>
                                        <img width='24' src={require('../../../assets/img/market/tokenpocket@2x.png')}
                                             alt=""/>
                                        <span>Tokenpocket</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        : null
                }

            </div>
        )
    }
}

const mapStateToProps = ({user}) => ({
    modalWallet: user.modalWallet,
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)
