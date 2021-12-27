import React from "react";
import './index.scss'

function star({item, i}) {
    return (
        <img width='16'
             src={require('../../assets/img/market/star.png')}
             alt=""
             key={`role-star-${item.name}-${i}`}
        />
    )
}

export default class Role extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {item, index} = this.props
        return (
                <div
                    className='role'
                    key={`role-${index}`}
                    onClick={() => {
                        this.props.history.push('/market/detail')
                    }}
                >
                    <div className='role-name'>
                        <span>{item.name}</span>
                        <img className='role-type'
                             src={item.type} alt=""/>
                    </div>
                    <div className='role-role'>
                        <img src={item.url} alt=""/>
                    </div>
                    <div className='role-star'>
                        {[...Array(item.star)].map((e, i) => {
                            return star({item, i})
                        })}
                    </div>
                    <div className='role-price-wrap'>
                        <img width='21' src={require('../../assets/img/market/hash@2x.png')}
                             alt=""/>
                        <span className='role-price-dummy'>0.49</span>
                        <span className='role-price-authentic'>≈ $260</span>
                    </div>
                </div>
        )
    }
}

