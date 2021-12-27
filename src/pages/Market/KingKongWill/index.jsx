import React from "react";
import './index.scss'

export default class KingKongWill extends React.Component {

    render() {
        return (
            <div className='market-main'>
                <div className='market-main-content'>
                    <div className='king-kong-will-wrap'>
                        <div className='king-kong-will'>
                            <img src={require('../../../assets/img/market/KingKongWill/Kingkongwill@2x.png')} alt=""/>
                            <button className='btn btn-confirm' onClick={()=>{
                                this.props.history.push('/market/king-kong-will-detail?willType=king')
                            }}>KingKongWill</button>
                        </div>
                        <div className='king-kong-will'>
                            <img src={require('../../../assets/img/market/KingKongWill/gameticket@2x.png')} alt=""/>
                            <button className='btn btn-confirm' onClick={()=>{
                                this.props.history.push('/market/king-kong-will-detail?willType=game')
                            }}>Game Ticket</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
