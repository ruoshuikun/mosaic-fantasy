import React from "react";
import './index.scss'

export default class Community extends React.Component {

    render() {
        const contact = [
            {
                icon: require('../../assets/img/Community/1@2x.png'),
                name: 'Website：',
                link: 'www.MosaicFantasy.io'
            },
            {
                icon: require('../../assets/img/Community/2@2x.png'),
                name: 'Telegram：',
                link: 't.me/MosaicFantasyOfficial'
            },
            {
                icon: require('../../assets/img/Community/3@2x.png'),
                name: 'Official community：',
                link: 't.me/MosaicFantasy'
            },
            {
                icon: require('../../assets/img/Community/4@2x.png'),
                name: 'Twitter：',
                link: 'com/MosaicFantasy'
            },
            {
                icon: require('../../assets/img/Community/5@2x.png'),
                name: 'Discord：',
                link: 'discord.gg/T3ANB7gd83'
            },
        ]
        return (
            <div className='community-wrap'>
                <div className='community-header'>
                    {
                        [...Array(4)].map((item, index) =>
                            <div className='community-header-game'>
                                <img src="" alt=""/>
                                <div className='community-header-game-info'>
                                    <div className='community-header-game-info-desc'>MosaicFantasy is coming soon</div>
                                    <div className='community-header-game-info-title'>MosaicFantasy is coming soon</div>
                                </div>
                            </div>)
                    }
                </div>
                <div className='community-main'>
                    <div className='community-main-left'>
                        <div className='community-main-left-title'>Contact us</div>
                        {
                            contact.map((item, index) =>
                                <div className='community-main-left-contact'>
                                    <img width='16' height='16' src={item.icon} alt=""/>
                                    <div>{item.name}</div>
                                    <div className='community-main-left-contact-link'>{item.link}</div>
                                </div>
                            )
                        }
                    </div>
                    <div className='community-main-right'>
                        <div className='community-main-right-title'>Submit a request</div>
                        <div className='community-main-right-form-label'>Your email address</div>
                        <input type="text"/>
                        <div className='community-main-right-form-label'>Description</div>
                        <input type="text" style={{height: '120px'}}/>
                        <div className='community-main-right-form-illustrate'>Plese enter the details of your request. A
                            member of support will respond as soon as
                            possible.
                        </div>
                        <div className='community-main-right-form-submit'>
                            <button className='btn btn-confirm'>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
