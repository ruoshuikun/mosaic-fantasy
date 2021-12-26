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

    }

    render() {
        const role = [
            {
                url: require('../../../assets/img/learn-more/mosaic/Typhon.png'),
                name: 'Typhon',
                type: require('../../../assets/img/market/ocean@2x.png'),
                star: 12
            },
        ]
        return (
            <div className='market-main'>
                <div className='market-main-content'>
                    <button className='btn back'>Back</button>
                    <div className='market-detail'>
                        <div className='market-detail-left'>
                            <div className='market-detail-left-code mb-small'>0x077cb9dF4e5f1D9F734a20a23D4C74D0868327c5</div>
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
                            <button className='btn btn-confirm buy-now'>BUY NOW</button>
                        </div>
                        <div className='market-detail-skill'>skill</div>
                        <div className='market-detail-right'>right</div>
                    </div>

                </div>
            </div>
        )
    }
}
