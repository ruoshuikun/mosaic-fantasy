import React from "react";
import './index.scss'
import AnimatedFragmentSlideshow from '../../components/AnimatedFragmentSlideshow'


export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasVerticalScrolled: false
        };
    }

    //在componentDidMount，进行scroll事件的注册，绑定一个函数，让这个函数进行监听处理
    componentDidMount() {
        // window.addEventListener('scroll', this.bindHandleScroll)
    }

    //在componentWillUnmount，进行scroll事件的注销
    componentWillUnmount() {
        // window.removeEventListener('scroll', this.bindHandleScroll);
    }

    bindHandleScroll = (event) => {
        const target = document.getElementById('target');
        console.log('target', target.getBoundingClientRect().top)
        // const  clientRect  =  target.getBoundingClientRect();
        // // console.log(clientRect);
        // // 滚动的高度
        // const scrollTop = (event.srcElement ? event.srcElement.documentElement.scrollTop : false)
        //     || window.pageYOffset
        //     || (event.srcElement ? event.srcElement.body.scrollTop : 0);
        // // console.info('event', event)
        // // console.info('scrollTop', scrollTop)
        // this.isInViewPort(event)
        // this.setState({
        //     hasVerticalScrolled: scrollTop > 10
        // })
    }

    isInViewPort(element) {
        const viewWidth = window.innerWidth || document.documentElement.clientWidth;
        const viewHeight = window.innerHeight || document.documentElement.clientHeight;
        const {top, right, bottom, left} = element.getBoundingClientRect();
        return top >= 0 && left >= 0 && right <= viewWidth && bottom <= viewHeight;
    }

    render() {

        // const  clientRect  =  target.getBoundingClientRect();
        // console.log(clientRect);

        return (
            <div className='home-wrap'>
                <div className='home'>
                    <img className='home-role' src={require('../../assets/img/home/role.png')} alt=""/>
                    <div className='home-about-mosaic-fantasy'>
                        <img src={require('../../assets/img/home/about-mosaic-fantasy.png')} alt=""/>
                        <div className='home-about-mosaic-fantasy-mosaic'>
                            MosaicFantasy creates an independent and sophisticated virtual world in which lives various
                            fantastic creatures holding superpower-Mosaic. In this amazing world, players are able to
                            obtain, upgrade and synthetize different kinds of Mosaic by taking part in the adventure,
                            battles and other ecological contribution.
                        </div>
                        <div>
                            Besides, MosaicFantasy is a massive blockchain game based on BSC (Binance Smart Chain) which
                            allows the gamers to earn relevant cryptocurrency by “Play to earn”. With “Play to Earn”
                            leading the new trend of game industry, MF(MosaicFantasy) shall bring spectacular experience
                            and extra benefits for gamers.
                        </div>
                    </div>
                    <div className='home-content'>
                        <div className='home-content-title'>
                            <img className='home-content-title-game-play'
                                 src={require('../../assets/img/home/game-play.png')}
                                 alt=""/>
                        </div>

                        <div className='home-content-role-wrap'>
                            <div>
                                <div className='home-content-role'>
                                    <div className='home-content-role-title'>Summon</div>
                                    <div className='home-content-role-desc'>Summoning Mosaic Heroes by using
                                        KingKongWill.
                                        They
                                        may belong to one of five elements: ocean, storm, flame, dawn and nether.
                                    </div>
                                </div>
                                <div className='home-content-role'>
                                    <div className='home-content-role-title'>Training</div>
                                    <div className='home-content-role-desc'>Train your Mosaic by PVE or daily tasks .
                                        The
                                        higher
                                        level of the Mosaic, more competitive and valuable it is.
                                    </div>
                                </div>
                                <div className='home-content-role'>
                                    <div className='home-content-role-title'>Battle</div>
                                    <div className='home-content-role-desc'>As each Mosaic has unique characteristics
                                        and
                                        skills, arrange your Mosaics strategically to win the battle and acquire the
                                        rewards
                                        in
                                        the game.
                                    </div>
                                </div>
                            </div>
                            <div className='home-content-role-img'>
                                <AnimatedFragmentSlideshow/>
                            </div>
                        </div>
                    </div>
                    <div className='home-content'>
                        <div className='home-content-title'>
                            <span></span>
                            <img className='home-content-title-play-earn'
                                 src={require('../../assets/img/home/play-to-earn.png')}
                                 alt=""/>
                        </div>
                        <div className='home-content-pie'>
                            <img className='home-content-pie-img' src={require('../../assets/img/home/pie.png')}
                                 alt=""/>
                            <div>
                                <div className='home-content-role'>
                                    <div className='home-content-role-title'>Play to Earn</div>
                                    <div className='home-content-role-desc'>
                                        Enable all the player to earn money by playing games and trade NFT on the
                                        market. Players will acquire Tokens by challenging the PVP arena , Guild War and
                                        other various game scenario.
                                    </div>
                                </div>
                                <div className='home-content-role'>
                                    <div className='home-content-role-title'>Trade</div>
                                    <div className='home-content-role-desc'>
                                        Players can use $LKK to trade Mosaic in the marketplace. The price and amount is
                                        totally decided by buyers and sellers.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="home-content">
                        <div className='part-ners'>
                            <img className='part-ners-img' src={require('../../assets/img/home/part-ners.png')} alt=""/>
                            <img className='part-ners-img-item'
                                 src={require('../../assets/img/home/part-ners-item.png')} alt=""/>
                        </div>
                    </div>
                    <div className='home-footer'>
                        <div className='home-footer-waistline'></div>
                        <img className='home-footer-img' src={require('../../assets/img/logo.png')} alt=""/>
                        <div>Incubated By MosaicFantasy</div>
                        <div className='home-footer-copyright'>Copyright © 2021 MosaicFantasy.io All Rights Reserved</div>
                    </div>
                </div>
            </div>
            // <div className='target' id='target'>
            //     {
            //
            //         [0, 1, 2, 3, 4].map(item =>
            //             <div className="header-container" id={item}>
            //                 <div className="headerTitle-container">
            //                     {item}
            //                 </div>
            //             </div>
            //         )
            //     }
            //
            // </div>

        )
    }
}
