import React from "react";
import './index.scss'

function star({item, i}) {
    return (
        <img width='16'
             src={require('../../../../assets/img/market/star.png')}
             alt=""
             key={`star-${item.name}-${i}`}
        />
    )
}

export default class MarketDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            buyNow: false
        }
    }

    render() {
        const roleProbability = [
            {
                name: 'Ocean',
                type: require('../../../../assets/img/market/ocean@2x.png'),
                width: 35,
                background: 'linear-gradient(90deg, #C3D2FB, #386BF3)',
                probability: 35
            },
            {
                name: 'Storm',
                type: require('../../../../assets/img/market/storm@2x.png'),
                width: 35,
                background: 'linear-gradient(90deg, #4FB880, #0D8152)',
                probability: 35
            },
            {
                name: 'Flame',
                type: require('../../../../assets/img/market/flame@2x.png'),
                width: 10,
                background: 'linear-gradient(90deg, #FFA524, #D50400)',
                probability: 10
            },
            {
                name: 'Dawn',
                type: require('../../../../assets/img/market/dawm@2x.png'),
                width: 5,
                background: 'linear-gradient(90deg, #10E2FD, #0BA3F7)',
                probability: 5
            },
            {
                name: 'Nether',
                type: require('../../../../assets/img/market/nether@2x.png'),
                width: 5,
                background: 'linear-gradient(90deg, #FFE255, #C88400)',
                probability: 5
            },
        ]
        const query = window.location.hash.split('?')[1]
        console.log('query', query.split('=')[1])
        // true: KingKongWill false: Game Ticket
        let willType = true
        if (query.split('=')[1] === 'king') {
            willType = true
        } else {
            willType = false
        }
        // let willType = !true
        return (
            <div className='market-main'>
                <div className='market-main-content'>
                    <button className='btn back'>Back</button>
                    <div className='market-will'>
                        <div className='market-will-left'>
                            <div
                                className='market-will-left-code mb-small'>0x077cb9dF4e5f1D9F734a20a23D4C74D0868327c5
                            </div>
                            <div className='market-will-will'>
                                {
                                    willType
                                        ? <div className='market-will-will-king'/>
                                        : <div className='market-will-will-game'/>
                                }
                            </div>
                            <div className='market-will-buy-now'>

                                <button style={{width: '156px'}} className='btn' onClick={() => {
                                    this.setState({
                                        buyNow: true
                                    })
                                }}>
                                    <div className='market-will-buy-now-price-wrap'>
                                        <img width='21' src={require('../../../../assets/img/market/hash@2x.png')}
                                             alt=""/>
                                        <span className='market-will-buy-now-price-dummy'>0.49</span>
                                        <span className='market-will-buy-now-price-authentic'>≈ $260</span>
                                    </div>
                                </button>
                                <button className='btn btn-confirm' onClick={() => {
                                    this.setState({
                                        buyNow: true
                                    })
                                }}>BUY NOW
                                </button>
                            </div>
                        </div>
                        <div className='market-will-right'>
                            {
                                willType
                                    ? <div className='market-will-right-king'>
                                        <img className='market-will-right-king-title'
                                             src={require('../../../../assets/img/market/KingKongWill/Chancetoget10Mosaicsfromallfiveelementsattributeswith.png')}
                                             alt=""/>
                                        {
                                            roleProbability.map(item =>
                                                <div className='market-will-right-king-probability'>
                                                    <span
                                                        className='market-will-right-king-probability-name'>{item.name}</span>
                                                    <div className='market-will-right-king-probability-type-wrap'>
                                                        <div className='market-will-right-king-probability-type'>
                                                            <img src={item.type}
                                                                 alt=""/>
                                                        </div>
                                                        <div
                                                            className='market-will-right-king-probability-type-progress-wrap'>
                                                            <div
                                                                className='market-will-right-king-probability-type-progress'
                                                                style={{
                                                                    width: item.width * 3.4 + 'px',
                                                                    background: item.background
                                                                }}/>
                                                        </div>
                                                        <span
                                                            className='market-will-right-king-probability-number'>{item.probability}%</span>
                                                    </div>
                                                </div>
                                            )
                                        }

                                    </div>
                                    : <div className='market-will-right-game'>
                                        <img className='market-will-right-game-title'
                                             src={require('../../../../assets/img/market/KingKongWill/EntrancetofantasticMosaicWorld.png')}
                                             alt=""/>
                                    </div>
                            }

                        </div>
                    </div>

                </div>
                {/*  弹窗  */}
                {
                    this.state.buyNow
                        ?
                        <div className='modal-mask-layer'>
                            <div className='modal-wallet'>
                                <div className='modal-wallet-header'>
                                    <span style={{width: '36px'}}/>
                                    <span style={{color: 'white'}}>BUY NOW</span>
                                    <img
                                        className='modal-close'
                                        width='36'
                                        src={require('../../../../assets/img/market/close@2x.png')}
                                        alt=""
                                        onClick={() => {
                                            this.setState({
                                                buyNow: false
                                            })
                                        }}
                                    />
                                </div>
                                <div className='modal-buy-now-main'>
                                    <div>
                                        <img width='50' height='50'
                                             src={require('../../../../assets/img/market/hash@2x.png')} alt=""/>
                                        <div className='modal-buy-now-main-hash'>1.44</div>
                                        <div className='modal-buy-now-main-price'>≈ $260</div>
                                    </div>
                                    <button className='btn btn-confirm buy-now' onClick={() => {
                                        this.setState({
                                            buyNow: false
                                        })
                                    }}>Corifirm
                                    </button>
                                </div>
                            </div>
                        </div>
                        : null
                }
            </div>
        )
    }
}
