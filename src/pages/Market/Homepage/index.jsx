import React from "react";
import './index.scss'
import Role from '../../../components/Role'

export default class Homepage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isActive: 0,
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

    componentDidMount() {
        document.getElementById('market-header').style.display = 'none'
    }
    componentWillUnmount() {
        document.getElementById('market-header').style.display = 'flex'
    }

    render() {
        const role = this.state.role
        const tabsData = ['Owns', 'Sold', 'Created']
        return (
            <div className='market-main'>
                <div className='homepage-wrap'>
                    <div className='homepage-info-wrap'>
                        <div className='homepage-info'>
                            <div className='homepage-avatar'/>
                            <div>
                                <div className='homepage-title'>456TFDR5678IJHGY7890OPLKHGTREDFGHYU5RFGHUIOKJHY65RE
                                </div>
                                <div className='homepage-desc'>456TFDR5678IJHGY7890OPLKHGTREDFGHYU5RFGHUIOKJHY65RE</div>
                            </div>
                        </div>
                    </div>
                    <div className="homepage-role">
                        <div className='homepage-role-tabs'>
                            {
                                tabsData.map((item, index) =>
                                    <div
                                        className={`homepage-role-tabs-item ${index === this.state.isActive ? "homepage-role-tabs-active" : null}`}
                                        onClick={() => {
                                            this.setState({
                                                isActive: index
                                            })
                                        }}>{item}</div>
                                )
                            }
                        </div>
                        <div className='homepage-role-item'>
                            {
                                role.map((item, index) =>
                                    <Role item={item} index={index}/>
                                )
                            }
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
