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

export default class MarketDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            buyNow: false
        }
    }

    render() {
        const role = [
            {
                url: require('../../../assets/img/learn-more/mosaic/Sphinx.png'),
                name: 'Sphinx',
                type: require('../../../assets/img/market/ocean@2x.png'),
                star: 5
            },
        ]
        return (
            <div className='market-main'>
                <div className='market-main-content'>
                    <button className='btn back'>Back</button>
                    <div className='market-detail'>
                        <div className='market-detail-left'>
                            <div
                                className='market-detail-left-code mb-small'>0x077cb9dF4e5f1D9F734a20a23D4C74D0868327c5
                            </div>
                            <div className='market-detail-role'>
                                {
                                    role.map((item, index) =>
                                        <div
                                            className='role-main-item'
                                            key={`role-main-item-${index}`}
                                            onClick={() => {
                                                this.props.history.push('/market/detail')
                                            }}
                                        >
                                            <div className='role-main-item-name'>
                                                <span>{item.name}</span>
                                                <img className='role-main-item-type'
                                                     src={item.type} alt=""/>
                                            </div>
                                            <div className='role-main-item-role'>
                                                <img src={item.url} alt=""/>
                                            </div>
                                            <div className='role-main-item-star'>
                                                {[...Array(item.star)].map((e, i) => {
                                                    return star({item, i})
                                                })}
                                            </div>
                                            <div className='role-main-item-price-wrap'>
                                                <img width='21' src={require('../../../assets/img/market/hash@2x.png')}
                                                     alt=""/>
                                                <span className='role-main-item-price-dummy'>0.49</span>
                                                <span className='role-main-item-price-authentic'>≈ $260</span>
                                            </div>
                                        </div>
                                    )
                                }
                            </div>
                            <button className='btn btn-confirm buy-now' onClick={() => {
                                this.setState({
                                    buyNow: true
                                })
                            }}>BUY NOW
                            </button>
                        </div>
                        <div className='market-detail-skill'>
                            <div className='market-detail-skill-item'>
                                <img width='80' height='80' className='mr-small'
                                     src={require('../../../assets/img/market/detail/1@2x.png')} alt=""/>
                                <div>
                                    <div>Skill 1 Wildwind Strike:
                                    </div>
                                    <div>
                                        Strike abruptly, make 145% physical damage and 35% chance of “Silence” for the
                                        random 2 Mosaics in the middle or back row lasting for 1 round. The damage will
                                        improve 30% when the targets are Wizards.

                                    </div>
                                </div>
                            </div>
                            <div className='market-detail-skill-item'>
                                <img width='80' height='80' className='mr-small'
                                     src={require('../../../assets/img/market/detail/2@2x.png')} alt=""/>
                                <div>
                                    <div>
                                        Skill 2 Storm Body:
                                    </div>
                                    <div>
                                        Improve 20% ATK (Attack) and 10% critical strike.
                                    </div>
                                </div>
                            </div>
                            <div className='market-detail-skill-item'>
                                <img width='80' height='80' className='mr-small'
                                     src={require('../../../assets/img/market/detail/3@2x.png')} alt=""/>
                                <div>
                                    <div>
                                        Skill 3 Final Trial:
                                    </div>
                                    <div>
                                        Lethal Judgment from the Lord of Wind. Make 260% physical damage to the
                                        opponent’s lowest HP Mosaic. If the target’s HP is under 30%, the damage will
                                        increase 15%. Once the target is killed, the HP of Sphinx will recover 15%.
                                    </div>
                                </div>
                            </div>
                            <div className='market-detail-skill-item'>
                                <img width='80' height='80' className='mr-small'
                                     src={require('../../../assets/img/market/detail/4@2x.png')} alt=""/>
                                <div>
                                    <div>
                                        Skill 4Wind King Area:
                                    </div>
                                    <div>
                                        When your Sphinx is the first one starting attack, it will add 15% damage in
                                        every attack. If not, there only 40% opportunity to add extra 1 attacking target
                                        and make 80% damage each time.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='market-detail-right'>
                            <div className='market-detail-right-header'>SALE HISTORY</div>
                            <div className='market-detail-right-price'>
                                <div className='role-main-item-price-wrap'
                                     style={{width: '150px', margin: 0, justifyContent: 'flex-start'}}>
                                    <img width='21' src={require('../../../assets/img/market/hash@2x.png')}
                                         alt="" style={{marginLeft: 0}}/>
                                    <span className='role-main-item-price-dummy' style={{fontSize: '13px'}}>0.49</span>
                                    <span className='role-main-item-price-authentic'
                                          style={{fontSize: '13px'}}>≈ $260</span>
                                </div>
                                <div style={{fontSize: '13px'}}>3 days ago</div>
                            </div>
                            <div className='market-detail-right-user'>
                                <img width='30' height='30' src={require('../../../assets/img/market/detail/user.png')}
                                     alt=""/>
                                <div>
                                    <div className='market-detail-right-user-info'>
                                        <span>Buyer</span>
                                        <span className='market-detail-right-user-info-path'>Homepage</span>
                                    </div>
                                    <div
                                        className='market-detail-right-user-code'>0x077cb9dF4e5f1D9F734a20a23D4C74D0868327c5
                                    </div>
                                </div>
                            </div>
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
                                        src={require('../../../assets/img/market/close@2x.png')}
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
                                        <img width='50' height='50' src={require('../../../assets/img/market/hash@2x.png')} alt=""/>
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
