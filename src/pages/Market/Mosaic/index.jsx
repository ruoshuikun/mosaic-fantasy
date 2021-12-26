import React from "react";
import './index.scss'

function star({item, i}) {
    return (
        <img width='16'
             src={require('../../../assets/img/market/star.png')}
             alt=""
             key={`star-${item.name}-${i}`}
        />
    )
}

export default class MarketMosaic extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            element: [
                {
                    url: require('../../../assets/img/learn-more/icon/Audit.png'),
                    name: 'Ocean',
                    checked: false
                },
                {
                    url: require('../../../assets/img/learn-more/icon/Audit.png'),
                    name: 'Storm',
                    checked: false
                },
                {
                    url: require('../../../assets/img/learn-more/icon/Audit.png'),
                    name: 'Flame',
                    checked: false
                },
                {
                    url: require('../../../assets/img/learn-more/icon/Audit.png'),
                    name: 'Dawn',
                    checked: false
                },
                {
                    url: require('../../../assets/img/learn-more/icon/Audit.png'),
                    name: 'Nether',
                    checked: false
                },
            ],
            role: [
                {
                    url: require('../../../assets/img/learn-more/mosaic/Typhon.png'),
                    name: 'Typhon',
                    type: require('../../../assets/img/market/ocean@2x.png'),
                    star: 12
                },
                {
                    url: require('../../../assets/img/learn-more/mosaic/Titan.png'),
                    name: 'Titan',
                    type: require('../../../assets/img/market/storm@2x.png'),
                    star: 7
                },
                {
                    url: require('../../../assets/img/learn-more/mosaic/Radon.png'),
                    name: 'Radon',
                    type: require('../../../assets/img/market/dawm@2x.png'),
                    star: 6
                },
                {
                    url: require('../../../assets/img/learn-more/mosaic/Sphinx.png'),
                    name: 'Sphinx',
                    type: require('../../../assets/img/market/ocean@2x.png'),
                    star: 5
                },
                {
                    url: require('../../../assets/img/learn-more/mosaic/Zeklahm.png'),
                    name: 'Zeklahm',
                    type: require('../../../assets/img/market/storm@2x.png'),
                    star: 5
                },
            ]
        }
    }
    render() {
        const element = this.state.element
        const role = this.state.role

        return (
            <div>
                <div className='market-main'>
                    <div className='market-left'>
                        <div className='input-wrap'>
                            <input type="text"/>
                            <div className='input-icon'>
                                <img width='14' height='16' src={require('../../../assets/img/market/search@2x.png')}
                                     alt=""/>
                            </div>
                        </div>
                        <div className='market-left-filter-wrap'>
                            <span className='market-left-filter'>Filter</span>
                            <span className='market-left-filter-clear'>clear Filter</span>
                        </div>
                        <div className='market-left-element-wrap'>
                            <div className='market-left-element-group'>ELEMENT</div>
                            <div className='market-left-element'>
                                {
                                    element.map((item, index) =>
                                        <div className='market-left-element-item'
                                             key={`market-left-element-item-${index}`}>
                                            <input id={item.name} className="chat-button-location-radio-input"
                                                   type="checkbox" name="color-input-red" value="#f0544d"/>
                                            <label htmlFor={item.name}>
                                                <img src={require('../../../assets/img/learn-more/icon/Audit.png')}
                                                     alt=""/>
                                                <span>{item.name}</span>
                                            </label>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                        <div className='market-left-star-level-wrap'>
                            <div className='market-left-star-level-group'>STAR LEVEL</div>
                            <div className='market-left-star-level'>
                                <div className='market-left-star-level-begin'>
                                    <span className='market-left-star-level-begin-dot'/>
                                    <div>5</div>
                                </div>
                                <div className='market-left-star-level-end'>
                                    <span className='market-left-star-level-end-dot'/>
                                    <div>12</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="market-right">
                        <div className='market-right-number-wrap'>
                            <input className='market-right-number' type="number"/>
                            <div className='market-right-number-change'>
                                <span>Price</span>
                                <div>
                                    <img width='10' height='13' src={require('../../../assets/img/market/changes.png')}
                                         alt=""/>
                                    <img className='market-right-number-change-fall' width='10' height='13'
                                         src={require('../../../assets/img/market/changes.png')}
                                         alt=""/>
                                </div>
                            </div>
                        </div>
                        <div className='market-right-main'>
                            {
                                role.map((item, index) =>
                                    <div
                                        className='market-right-main-item'
                                        key={`market-right-main-item-${index}`}
                                        onClick={() => {
                                            this.props.history.push('/market/detail')
                                        }}
                                    >
                                        <div className='market-right-main-item-name'>
                                            <span>{item.name}</span>
                                            <img className='market-right-main-item-type'
                                                 src={item.type} alt=""/>
                                        </div>
                                        <div className='market-right-main-item-role'>
                                            <img src={item.url} alt=""/>
                                        </div>
                                        <div className='market-right-main-item-star'>
                                            {[...Array(item.star)].map((e, i) => {
                                                return star({item, i})
                                            })}
                                        </div>
                                        <div className='market-right-main-item-price-wrap'>
                                            <img width='21' src={require('../../../assets/img/market/hash@2x.png')}
                                                 alt=""/>
                                            <span className='market-right-main-item-price-dummy'>0.49</span>
                                            <span className='market-right-main-item-price-authentic'>≈ $260</span>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
