import React from "react";
import './index.scss'

export default class CommunityDetail extends React.Component {
    render() {
        return (
            <div className='community-detail-wrap'>
                <div className='community-detail'>
                    <button className='btn'>Back</button>
                    <div className='community-detail-title'>MosaicFantasy is coming soon</div>
                    <div className='community-detail-time'>
                        <div>MosaicFantasy is coming soon</div>
                        <div className='ml-small'>2021-12-26 21:10</div>
                    </div>
                    <img src="" className='community-detail-game' alt=""/>
                    <div className='community-detail-game-desc'>
                        MF (MosaicFantasy) is a massive blockchain game based on BSC (Binance Smart Chain) which allows
                        the gamers to “Play to Earn”. With self-operating ecological economy, MF creates an independent
                        and sophisticated virtual world in which lives various fantastic creatures holding
                        superpower-Mosaic. In this amazing world, players are able to obtain and upgrade different kinds
                        of Mosaic by taking part in the adventure, battles and other ecological contribution. Besides,
                        players can earn relevant cryptocurrency and MF tokens as well.
                    </div>
                    <div className='community-detail-game-desc'>
                        MF (MosaicFantasy) will bring spectacular experience for gamers with high quality game making,
                        grand background and multiple “Play to Earn” methods. With “Play to Earn” leading the new trend
                        of game industry, MF (MosaicFantasy) shall break the block between the reality and virtuality
                        and become the second space for human working, entertainment and social life in the future!
                    </div>
                </div>
            </div>

        )
    }
}
