import React from "react";
import './index.scss'

function star({item, i}) {
    return (
        <img width='16'
             src={require('../../assets/img/market/star.png')}
             alt=""
             key={`mining-role-star-${i}`}
        />
    )
}


class Unlocked extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalMining: false,
            modalStake: false
        }
    }

    render() {
        const {i} = this.props
        return (
            <div className='unlocked'>
                {
                    i != 0
                        ? <div key={`unlocked-${i}`}
                               className={`unlocked-item unlocked-item-null`}>
                            <div/>
                            <img
                                width='64'
                                height='64'
                                src={require('../../assets/img/mining/unlocked-add.png')}
                                alt=""
                                onClick={() => {
                                    this.setState({
                                        modalMining: true
                                    })
                                }}
                            />
                            <div className='unlocked-item-status'>Unlocked</div>
                        </div>
                        : <div key={`unlocked-${i}`}
                               className={`unlocked-item unlocked-item-select`}>
                            <div className='unlocked-item-time'>
                                <div className='unlocked-item-time-son'>
                                    <span className='unlocked-item-time-son-number'>12</span>
                                    <span>Days</span>
                                </div>
                                <span className='unlocked-item-time-colon'>:</span>
                                <div className='unlocked-item-time-son'>
                                    <span className='unlocked-item-time-son-number'>20</span>
                                    <span>Hours</span>
                                </div>
                                <span className='unlocked-item-time-colon'>:</span>
                                <div className='unlocked-item-time-son'>
                                    <span className='unlocked-item-time-son-number'>50</span>
                                    <span>Mins</span>
                                </div>
                            </div>
                            <img width='162' height='162' src={require('../../assets/img/learn-more/mosaic/Typhon.png')}
                                 alt=""/>
                            <div className='role-star'>
                                {[...Array(5)].map((e, i) => {
                                    return star({e, i})
                                })}
                            </div>
                        </div>
                }
                <button className='btn btn-confirm' style={{width: '180px'}} onClick={() => {
                    this.setState({
                        modalStake: true
                    })
                }}>Stake
                </button>
                {/*  弹窗  */}
                {
                    this.state.modalMining
                        ? <div className='modal-mask-layer'>
                            <div className='modal-mining'>
                                <div className='modal-mining-header'>
                                    <span style={{width: '36px'}}/>
                                    <span className='modal-mining-header-title'>NFT Available</span>
                                    <img
                                        className='modal-close'
                                        width='36'
                                        src={require('../../assets/img/market/close@2x.png')}
                                        alt=""
                                        onClick={() => {
                                            this.setState({
                                                modalMining: false
                                            })
                                        }}
                                    />
                                </div>
                                <div className='modal-mining-main'>
                                    {[...[
                                        {
                                            url: require('../../assets/img/learn-more/mosaic/Typhon.png')
                                        },
                                        {
                                            url: require('../../assets/img/learn-more/mosaic/Typhon.png')
                                        },
                                        {
                                            url: require('../../assets/img/learn-more/mosaic/Typhon.png')
                                        },
                                        {
                                            url: require('../../assets/img/learn-more/mosaic/Typhon.png')
                                        },
                                        {
                                            url: require('../../assets/img/learn-more/mosaic/Typhon.png')
                                        },
                                        {
                                            url: require('../../assets/img/learn-more/mosaic/Typhon.png')
                                        },
                                        {
                                            url: require('../../assets/img/learn-more/mosaic/Typhon.png')
                                        },
                                        {
                                            url: require('../../assets/img/learn-more/mosaic/Typhon.png')
                                        },
                                        {
                                            url: require('../../assets/img/learn-more/mosaic/Typhon.png')
                                        },
                                        {
                                            url: require('../../assets/img/learn-more/mosaic/Typhon.png')
                                        },
                                        {
                                            url: require('../../assets/img/learn-more/mosaic/Typhon.png')
                                        },
                                        {
                                            url: require('../../assets/img/learn-more/mosaic/Typhon.png')
                                        },

                                    ]].map((item, index) =>

                                        <div key={`modal-mining-main-role-wrap-${index}`}
                                             className='modal-mining-main-role-wrap'>
                                            <div className='modal-mining-main-role'>
                                                <img className='modal-mining-main-role-img'
                                                     src={item.url} alt=""/>
                                                <div className='role-star'>
                                                    {[...Array(5)].map((e, i) => {
                                                        return star({e, i})
                                                    })}
                                                </div>
                                            </div>
                                            <div className='modal-mining-main-role-radio-wrap'>

                                            </div>
                                        </div>
                                    )}

                                </div>
                                <div className="modal-mining-footer">
                                    <button className='btn btn-confirm'
                                            onClick={() => {
                                                this.setState({
                                                    modalMining: false
                                                })
                                            }}>Add in
                                    </button>
                                </div>
                            </div>
                        </div>
                        : null
                }

                {/*  弹窗 Stake  */}
                {
                    this.state.modalStake
                        ? <div className='modal-mask-layer'>
                            <div className='modal-mining modal-stake'>
                                <div className='modal-mining-header'>
                                    <span style={{width: '36px'}}/>
                                    <span className='modal-mining-header-title'>Staking Rules</span>
                                    <img
                                        className='modal-close'
                                        width='36'
                                        src={require('../../assets/img/market/close@2x.png')}
                                        alt=""
                                        onClick={() => {
                                            this.setState({
                                                modalStake: false
                                            })
                                        }}
                                    />
                                </div>
                                <div className='modal-mining-main'>
                                    <div style={{width: '100%', height: '260px'}}>
                                        <div className='modal-mining-main-table-header'>
                                            <div style={{width: '10%'}}>Periods</div>
                                            <div style={{width: '25%'}}>Benefits</div>
                                            <div style={{width: '55%'}}>Unlock in advance</div>
                                        </div>
                                        <div className='modal-mining-main-table-body'>
                                            <div style={{width: '10%'}}>15 days</div>
                                            <div style={{width: '25%'}}>100%* Average Income</div>
                                            <div style={{width: '55%'}}>Deduct 10% staked tokens every single day in advance
                                                with maximum 70%. The tokens you have mined will all be deducted.
                                            </div>
                                        </div>
                                        <div className='modal-mining-main-table-body'>
                                            <div style={{width: '10%'}}>45 days</div>
                                            <div style={{width: '25%'}}>120%* Average Income</div>
                                            <div style={{width: '55%'}}>Deduct 8% staked tokens every single day in advance
                                                with maximum 70%. The tokens you have mined will all be deducted.
                                            </div>
                                        </div>
                                        <div className='modal-mining-main-table-body'>
                                            <div style={{width: '10%'}}>90 days</div>
                                            <div style={{width: '25%'}}>160%* Average Income</div>
                                            <div style={{width: '55%'}}>Deduct 5% staked tokens every single day in advance
                                                with maximum 70%. The tokens you have mined will all be deducted.
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        The tokens deducted are distributed in different ways: 40% into the Black Hole, 10%
                                        to the Mining pool, 30% to the address of $LKK holders, 20% to the Liquidity pool
                                        with a ratio 1:1.
                                    </div>
                                </div>
                                <div className="modal-mining-footer">
                                    <button className='btn btn-confirm'
                                            style={{width: '200px'}}
                                            onClick={() => {
                                                this.setState({
                                                    modalStake: false
                                                })
                                            }}>Back to Wallet Assets
                                    </button>
                                    <button className='btn btn-confirm'
                                            style={{width: '200px'}}
                                            onClick={() => {
                                                this.setState({
                                                    modalStake: false
                                                })
                                            }}>Confirm Staking
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

export default class Mining extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalMining: false
        }
    }

    render() {
        return (
            <div className='mining-wrap'>
                <div className='mining-header'>
                    <img width='560' height='272' src={require('../../assets/img/mining/mining-illustration.png')}
                         alt=""/>
                    <div className='mining-header-txt'>
                        <span>In MosaicFantasty World, Mosaic NFT can be used to participate in mining $LKK to earn more.</span>
                        <a href=''> More Information</a>
                    </div>
                </div>
                <div className="mining-main">
                    <div className="mining-main-left">
                        <div className='mining-main-left-title'>MosaicFantasy Mining Pool</div>
                        <div className='mining-main-left-number'>432,281</div>
                        <div className='mining-main-left-conversion'>Remaining prize pool(LKK) ≈ $1,137,990</div>
                        <div className='mining-main-left-item'>
                            <div className='mining-main-left-item-title'>
                                <span>2,158,690</span>
                                <span>0</span>
                            </div>
                            <div className='mining-main-left-item-desc'>
                                <span>Total Mining Power</span>
                                <span>My Mining Power</span>
                            </div>
                        </div>
                        <div className='mining-main-left-item'>
                            <div className='mining-main-left-item-title'>
                                <span>5,526</span>
                                <span>0</span>
                            </div>
                            <div className='mining-main-left-item-desc'>
                                <span>Total Mining Power</span>
                                <span>My Mining Amount</span>
                            </div>
                        </div>
                        <div className='mining-main-left-item'>
                            <div className='mining-main-left-item-title'>
                                <span>4,923,000</span>
                            </div>
                            <div className='mining-main-left-item-desc'>
                                <span style={{width: '100%'}}>Total Staked Tokens(LKK) ≈ 12,868,678</span>
                            </div>
                        </div>
                        <div className='mining-main-left-item'>
                            <div className='mining-main-left-item-title'>
                                <span>0</span>
                            </div>
                            <div className='mining-main-left-item-desc'>
                                <span style={{width: '100%'}}>My Staked Token(LKK) ≈ $0</span>
                            </div>
                        </div>
                        <div className='mining-main-left-item'>
                            <div className='mining-main-left-item-title'>
                                <span>26.68</span>
                            </div>
                            <div className='mining-main-left-item-desc'>
                                <span style={{width: '100%'}}>100 Mining Power/24H to get(LKK) ≈ $65.34</span>
                            </div>
                        </div>
                        <div className='mining-main-left-item'>
                            <div className='mining-main-left-item-title'>
                                <span>0.00</span>
                            </div>
                            <div className='mining-main-left-item-desc'>
                                <span style={{width: '100%'}}>(LKK) ≈ $0</span>
                            </div>
                            <div className='mining-main-left-item-btn'>
                                <button className='btn btn-confirm' style={{width: '90px'}}>Harvest</button>
                            </div>
                        </div>
                    </div>
                    <div className="mining-main-right">
                        {[...Array(12)].map((e, i) => {
                            return <Unlocked e={e} i={i}/>
                        })
                        }
                    </div>
                </div>

            </div>
        )
    }
}
