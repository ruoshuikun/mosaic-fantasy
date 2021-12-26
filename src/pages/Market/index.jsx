import React from "react";
import './index.scss'


export default class Market extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            element: [
                {
                    url: require('../../assets/img/learn-more/icon/Audit.png'),
                    name: 'Ocean',
                    checked: false
                },
                {
                    url: require('../../assets/img/learn-more/icon/Audit.png'),
                    name: 'Storm',
                    checked: false
                },
                {
                    url: require('../../assets/img/learn-more/icon/Audit.png'),
                    name: 'Flame',
                    checked: false
                },
                {
                    url: require('../../assets/img/learn-more/icon/Audit.png'),
                    name: 'Dawn',
                    checked: false
                },
                {
                    url: require('../../assets/img/learn-more/icon/Audit.png'),
                    name: 'Nether',
                    checked: false
                },
            ],
            role: [
                {
                    url: require('../../assets/img/learn-more/mosaic/Typhon.png'),
                    name: 'Typhon',
                    type: require('../../assets/img/market/ocean@2x.png'),
                    star: 12
                },
                {
                    url: require('../../assets/img/learn-more/mosaic/Titan.png'),
                    name: 'Titan',
                    type: require('../../assets/img/market/storm@2x.png'),
                    star: 7
                },
                {
                    url: require('../../assets/img/learn-more/mosaic/Radon.png'),
                    name: 'Radon',
                    type: require('../../assets/img/market/dawm@2x.png'),
                    star: 6
                },
                {
                    url: require('../../assets/img/learn-more/mosaic/Sphinx.png'),
                    name: 'Sphinx',
                    type: require('../../assets/img/market/ocean@2x.png'),
                    star: 5
                },
                {
                    url: require('../../assets/img/learn-more/mosaic/Zeklahm.png'),
                    name: 'Zeklahm',
                    type: require('../../assets/img/market/storm@2x.png'),
                    star: 5
                },
            ]
        }
    }

    componentDidMount() {
        this.props.history.push('/market/mosaic')
    }

    render() {
        return (
            <div className='market-wrap'>
                <div className='market'>
                    <div className='market-header'>
                        <button className='btn btn-confirm'>Mosaic</button>
                        <button className='btn btn-cancel ml-small'>
                            <span>KingKongWill</span>
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}
