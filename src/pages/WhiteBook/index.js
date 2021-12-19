import React from "react";
import Clipboard from 'clipboard';
import './index.scss'
import Tree from '../../components/Tree/index.jsx';

function Mosaic({item, index}) {
    return (
        <div key={index}>
            <div className="learn-more-content-title-level2" id={item.key}>{item.type}</div>
            <img className='mb-small' src={item.img} alt="" width='154' height='154'/>
            <div className="learn-more-content-title-level3">{item.name}</div>
            <div>
                {
                    item.skill.map((itemSkill, indexSkill) => <p key={indexSkill}>{itemSkill}</p>)
                }
            </div>
        </div>
    )
}

export default class WhiteBook extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasVerticalScrolled: false,
            treeData: [
                {
                    title: 'Welcome to MosaicFantasy',
                    key: '0-0',
                    url: require('../../assets/img/learn-more/icon/welcome.png')
                },
                {
                    title: 'About MosaicFantasy Platform',
                    key: '1-0',
                    url: require('../../assets/img/learn-more/icon/about.png'),
                    children: [
                        {
                            title: 'Blockchain Basis',
                            key: '1-0-0',
                        },
                        {
                            title: 'Wallet Guideline',
                            key: '1-0-1',
                        },
                        {
                            title: 'What’s Mosaic NFT?',
                            key: '1-0-2',
                        },
                        {
                            title: 'How to get Mosaic NFT?',
                            key: '1-0-3',
                        },
                        {
                            title: 'What’s mining power?',
                            key: '1-0-4',
                        },
                    ],
                },
                {
                    title: 'About MosaicFantasy Game',
                    key: '2-0',
                    url: require('../../assets/img/learn-more/icon/AboutMosaicFantasyGame.png'),
                    children: [
                        {
                            title: 'Entering the game',
                            key: '2-0-0',
                        },
                        {
                            title: 'Background',
                            key: '2-0-1',
                        },
                        {
                            title: 'Introduction of Mosaic',
                            key: '2-0-2',
                            url: require('../../assets/img/learn-more/icon/IntroductionMosaic.png'),
                            children: [
                                {
                                    title: 'Ocean Mosaic',
                                    key: '2-0-2-0',
                                },
                                {
                                    title: 'Storm Mosaic',
                                    key: '2-0-2-1',
                                },
                                {
                                    title: 'Flame Mosaic',
                                    key: '2-0-2-3',
                                },
                                {
                                    title: 'Dawn Mosaic',
                                    key: '2-0-2-4',
                                },
                                {
                                    title: 'Nether Mosaic',
                                    key: '2-0-2-5',
                                },
                            ]
                        },
                        {
                            title: 'Gameplay',
                            key: '2-0-3',
                        },
                    ],
                },
                {
                    title: 'Token Economy',
                    key: '3-0',
                    url: require('../../assets/img/learn-more/icon/TokenEconomy.png'),
                    children: [
                        {
                            title: 'What’s $LKK',
                            key: '3-0-0',
                        },
                        {
                            title: 'What’s $BLP',
                            key: '3-0-1',
                        },
                        {
                            title: 'Deflation Model',
                            key: '3-0-2',
                        },
                    ]
                },
                {
                    title: 'Ecological Strategy',
                    key: '4-0',
                    url: require('../../assets/img/learn-more/icon/EcologicalStrategy.png'),

                },
                {
                    title: 'Contact Us',
                    key: '5-0',
                    url: require('../../assets/img/learn-more/icon/ContactUs.png'),

                },
                {
                    title: 'Audit',
                    key: '6-0',
                    url: require('../../assets/img/learn-more/icon/Audit.png'),

                }
            ],
            introductionMosaic: [
                {
                    type: 'Ocean Mosaic',
                    key: '2-0-2-0',
                    img: require('../../assets/img/learn-more/mosaic/Zeklahm.png'),
                    name: 'Zeklahm',
                    skill: [
                        'Skill 1 - Deep Ocean Horn: Blowing the horns of the deep ocean sound, drive away 1 debuff and improve 15% (ATK)attack lasting for 2 rounds for two Mosaics with highest attack points of own side.',
                        'Skill 2 - Deep Ocean Blood: Improve 15% HP (Health point) and 15% ATK (Attack).',
                        'Skill 3 - Ocean Spirit Blessing: Blessing from Zeklahm, bring 1 Mosaic of own side back to life and recover HP of 171% Zeklahm’s ATK for it. If there is no death on the team, it will recover the Mosaic with lowest HP of 247% Zeklahm’s ATK for it.',
                        'Skill 4 - Deep Ocean Echo: Reecho the sound of horn in the tide, strengthen the effectiveness of “Deep Ocean Horn”, improve 10% critical strike of the attacking target lasting for 2 rounds.'
                    ]
                },
                {
                    type: 'Storm Mosaic',
                    key: '2-0-2-1',
                    img: require('../../assets/img/learn-more/mosaic/Sphinx.png'),
                    name: 'Sphinx',
                    skill: [
                        'Skill 1 – Wildwind Strike: Strike abruptly, make 145% physical damage and 35% chance of “Silence” for the random 2 Mosaics in the middle or back row lasting for 1 round. The damage will improve 30% when the targets are Wizards.',
                        'Skill 2 – Storm Body: Improve 20% ATK (Attack) and 10% critical strike',
                        'Skill 3 –Final Trial: Lethal Judgment from the Lord of Wind. Make 260% physical damage to the opponent’s lowest HP Mosaic. If the target’s HP is under 30%, the damage will increase 15%. Once the target is killed, the HP of Sphinx will recover 15%.',
                        'Skill 4 – Wind King Area: When your Sphinx is the first one starting attack, it will add 15% damage in every attack. If not, there only 40% opportunity to add extra 1 attacking target and make 80% damage each time.'
                    ]
                },
                {
                    type: 'Flame Mosaic',
                    key: '2-0-2-3',
                    img: require('../../assets/img/learn-more/mosaic/Radon.png'),
                    name: 'Radon',
                    skill: [
                        'Skill 1 – Vulcan Combo: Make fierce 5 continuous strikes by Vulcan’s trident with 150% physical damage to rival single Mosaic. Each damage has 20% opportunity to add “Burning” lasting for 2 rounds.',
                        'Skill 2 – Vulcan Protector: Improve 20% ATK (Attack), 10%HP (Health Point) and 5% critical strike.',
                        'Skill 3 – Demonization: Radon will trigger demonization when HP is under 60%. It will drive any debuff away and improve 15% ATK and 5% critical strike. All the controlling skills will ineffective under demonization status. Skill “Vulcan Combo” will improve to 180% limits without cooling time. Demonization can last for 4 rounds and can be triggered only once in each battle.',
                        'Skill 4 – Stony Magic Fire: Everything released from the weapon of God of stone. All your Mosaics’ damage of “Burning” and “Flame Burning” will increase and improve 5% ATK of Radon.'
                    ]
                },
                {
                    type: 'Dawn Mosaic',
                    key: '2-0-2-4',
                    img: require('../../assets/img/learn-more/mosaic/Titan.png'),
                    name: 'Titan',
                    skill: [
                        'Skill 1 – Dead by Dawn: Make 160% physical damage to the front Mosaic ignoring 30% defense of the target. If the target in “electrification”, the damage will increase 15%.',
                        'Skill 2 – Shadow of Titan: Sensing the blessing of the Dawn, improve 15% ATK (Attack), and 10% critical strike.',
                        'Skill 3 – Pursuing of Dawn: The strike of Dawn leads to the death till the very end. 40% opportunity to summon extra lightning to add attack and make 80% damage.',
                        'Skill 4– Wrath Counterattack: When get attacked, 60% opportunity to use “Regular Attack” to strike back the target.'
                    ]
                },
                {
                    type: 'Nether Mosaic',
                    key: '2-0-2-5',
                    img: require('../../assets/img/learn-more/mosaic/Typhon.png'),
                    name: 'Typhon',
                    skill: [
                        'Skill 1 – Spectral Storm: With bursting huge power of dead ghost, make 72% damage to all the opponents and have 60% opportunity to add “Death Mark”(Skill damage for 1 time) for the target lasting for 2 rounds.',
                        'Skill 2 – Nether Death: Typhon dominates the Nether Land from which it absorbs power. Improve 20% ATK (Attack), 10%HP (Health Point) and 5% critical strike.',
                        'Skill 3 – Annihilation: The power of lethal ghost can destroy everything. Make 2 physical damage (222%+HP damage percentage*100%) for the single Mosaic of the rival back row.',
                        'Skill 4 – Ghost Transfer: Death will take over the ghosts of the war. If the opponent carry “Death Mark”, it will die and all the members of your team will recover HP of Typhon‘s 80% ATK.'
                    ]
                },
            ]
        }
    }

    // 添加Dom距离顶部的距离
    addOffsetTop(val) {
        val.map(item => {
            const {key, children} = item
            const contentDom = document.getElementById(key)
            item.offsetTop = contentDom.offsetTop - 180
            if (children) {
                this.addOffsetTop(children)
            }
        })
    }

    //在componentDidMount，进行scroll事件的注册，绑定一个函数，让这个函数进行监听处理
    componentDidMount() {
        // tree-active
        // 默认加粗第一个
        document.getElementById(`menu-0-0`).classList.add("tree-active")
        this.addOffsetTop(this.state.treeData)
        window.addEventListener('scroll', this.windowHandleScroll)
        document.getElementById("learn-more-content").addEventListener('scroll', this.bindHandleScroll)
    }

    //在componentWillUnmount，进行scroll事件的注销
    componentWillUnmount() {
        window.removeEventListener('scroll', this.bindHandleScroll);
    }

    isInViewPortOfTwo(el) {
        const viewPortHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
        const top = el.getBoundingClientRect() && el.getBoundingClientRect().top
        console.log('top', top)
        return top <= viewPortHeight + 100
    }

    windowHandleScroll(event) {

    }

    // 左侧菜单，根据右侧滑动 加粗相应的菜单
    treeActive({val, scrollTop}) {
        val.map((item, index) => {
            const {key, offsetTop, children} = item
            if (offsetTop < scrollTop) {
                const treeActive = document.querySelectorAll('.tree-active')
                for (let i = 0; i < treeActive.length; i++) {
                    treeActive[i].classList.remove("tree-active")
                }
                const contentDom = document.getElementById(`menu-${key}`)
                contentDom.classList.add("tree-active")
            }
            if (children) {
                this.treeActive({val: children, scrollTop})
            }
        })
    }

    bindHandleScroll = (event) => {
        console.log('bindHandleScroll')
        // 获取内容dom
        const contentDom = document.getElementById('learn-more-content')
        const scrollTop = contentDom.scrollTop;

        this.treeActive({val: this.state.treeData, scrollTop})
        // this.state.treeData.map((item, index) => {
        //     const {offsetTop, key} = item
        //     // console.log('offsetTop', offsetTop)
        //     // 默认160 是第一个的offsetTop
        //     let before = 0, after = 160
        //     if (index > 0 && index < [this.state.treeData.length - 1]) {
        //         before = this.state.treeData[index - 1].offsetTop
        //         after = this.state.treeData[index + 1].offsetTop
        //         console.table({before, scrollTop, after})
        //     }
        //     if (offsetTop < scrollTop && before < scrollTop < after) {
        //         const treeActive = document.querySelectorAll('.tree-active')
        //         for (let i = 0; i < treeActive.length; i++) {
        //             treeActive[i].classList.remove("tree-active")
        //         }
        //         const contentDom = document.getElementById(`menu-${key}`)
        //         contentDom.classList.add("tree-active")
        //     }
        // })
    }

    copyLink() {
        new Clipboard('.copy-link');
    }

    render() {
        const tree = this.state.treeData
        const {introductionMosaic} = this.state

        return (
            <div className='learn-more'>
                {/*copy link*/}
                <div className='copy-link' onClick={() => this.copyLink()} data-clipboard-text={window.location}>
                    <img src={require('../../assets/img/learn-more/icon/copy-link.png')} alt=""/>
                    <span>copy link</span>
                </div>
                <div className='learn-more-menu' id='learn-more-menu'>
                    <Tree
                        treeData={tree}
                        onSelect={() => this.onSelect()}
                        defaultExpandedKeys={[]}
                    />
                </div>
                <div id='learn-more-content'>
                    <div className='learn-more-content' id='0-0'>
                        <div className="learn-more-content-title-level1">Welcome to MosaicFantasy</div>
                        <div className='learn-more-content-desc'>
                            <div className='mb-default'>
                                MF (MosaicFantasy) is a massive blockchain game based on BSC (Binance Smart Chain) which
                                allows the gamers to “Play to Earn”. With self-operating ecological economy, MF creates
                                an
                                independent and sophisticated virtual world in which lives various fantastic creatures
                                holding superpower-Mosaic. In this amazing world, players are able to obtain, upgrade
                                and
                                synthetize different kinds of Mosaic by taking part in the adventure, battles and other
                                ecological contribution. Besides, players can earn relevant cryptocurrency and MF tokens
                                as
                                well.
                            </div>
                            <div>
                                MF（MosaicFantasy）will bring spectacular experience for gamers with high quality game
                                making, grand background and multiple “Play to Earn” methods. With “Play to Earn”
                                leading
                                the new trend of game industry, MF（MosaicFantasy）shall break the block between the
                                reality
                                and virtuality and becomes the second space for human working, entertainment and social
                                life
                                in the future!
                            </div>
                        </div>
                    </div>
                    <div className='learn-more-content' style={{marginTop: '97px'}}>
                        <div className="learn-more-content-title-level1" id='1-0'>About MosaicFantasy Platform</div>
                        <div>
                            <div className="learn-more-content-title-level2" id='1-0-0'>Blockchain Basis</div>
                            <div>
                                <div className="learn-more-content-title-level3">DeFi (Decentralized Finance)</div>
                                <div className='learn-more-content-desc'>
                                    <div>
                                        DeFi is a system by which financial products become available on a public
                                        decentralized blockchain network. That makes them open to anyone to use, rather
                                        than traditional centralized finance like banks or brokerages. With a system by
                                        which software written on blockchains, DeFi makes it possible for buyers,
                                        sellers, lenders, and borrowers to interact peer to peer or with a strictly
                                        software-based middleman rather than a company or institution facilitating a
                                        transaction and improving the existing financial system.
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="learn-more-content-title-level3">NFT (Non-Fungible Token)</div>
                                <div className='learn-more-content-desc'>
                                    <div>
                                        NFT (Non-Fungible Token) are cryptographic assets on blockchain with unique
                                        identification codes and metadata that distinguish them from each other. Unlike
                                        Fungible Tokens such as BTC and ETH which are identical to each other, NFT is
                                        unique in its identification and indivisible with minimum unit 1. Therefore,
                                        non-fungible, unique and inalterable characteristics of NFT make it become the
                                        perfect medium for commercial transactions, especially in digital art and games.
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="learn-more-content-title-level3">GameFi</div>
                                <div className='learn-more-content-desc'>
                                    <div>
                                        GameFi is Game+DeFi, which is a mode of integration of Game and Finance,
                                        presenting decentralized financial products through games. It triggers the new
                                        model of “Play to Earn” other than “Play to Win”. In other words, players can
                                        not only win equipment or tools in the game, but in turn, those equipment or
                                        tools are also digital assets measured by NFT which can be traded for fiat money
                                        and spend in real life. GameFi makes the game both enjoyable and profitable for
                                        players.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='learn-more-content'>
                        <div className="learn-more-content-title-level2" id='1-0-1'>Wallet Guideline</div>
                        <div className='learn-more-content-desc'>
                            <div>
                                MosaicFantasy is a project based on BSC chain, so players need to create a BSC address.
                                At present, there are many wallets on the market that support BSC chain. Take Token
                                Pocket (TP) and MetaMask for example.
                            </div>
                        </div>
                        <div>
                            <div>
                                <div className="learn-more-content-title-level3">TP Wallet Tutorial</div>
                                <div className='learn-more-content-desc'>
                                    <div>
                                        <span className='learn-more-content-desc-step'>Step1: </span>
                                        <span>Download and install the TP Wallet APP.</span>
                                    </div>
                                    <div>
                                        Go to the website of TP wallet (URL: <a
                                        href="https://www.tokenpocket.pro/zh/download/app">https://www.tokenpocket.pro/zh/download/app</a>),
                                        and
                                        select
                                        the corresponding wallet version according to your device.
                                    </div>
                                    <img className='learn-more-content-desc-step-img' width='846' height='456'
                                         src={require('../../assets/img/learn-more/step1.png')} alt=""/>
                                    <div>
                                        <span className='learn-more-content-desc-step'>Step2: </span>
                                        <span>With TP Wallet on your smartphone, click to open and create a wallet. As a new beginner without Wallet, please choose “No Wallet” and choose the blockchain network you would like to create. As MF is based on BSC , you need to choose BSC network to “Create Wallet”.</span>
                                    </div>
                                    <img className='learn-more-content-desc-step-img' width='846' height='456'
                                         src={require('../../assets/img/learn-more/step2.png')} alt=""/>
                                    <div>
                                        <span className='learn-more-content-desc-step'>Step3: </span>
                                        <span>Set your BSC wallet name and password, and then tick “Terms of Service and Privacy”, click “Create Wallet” to proceed.</span>
                                    </div>
                                    <img className='learn-more-content-desc-step-img' width='846' height='456'
                                         src={require('../../assets/img/learn-more/step3.png')} alt=""/>
                                    <div>
                                        <span className='learn-more-content-desc-step'>Step4: </span>
                                        <span>Backup Mnemonic. In addition to the password, the mnemonic phrase is an important tool for restoring the wallet and must be backed up. Please do not take screenshots to keep your assets saft and then click “I get it”. Backup your mnemonic and keep it in a safe place, read [Attention] carefully, click “Completed Backup, Verify it”.</span>
                                    </div>
                                    <img className='learn-more-content-desc-step-img' width='846' height='716'
                                         src={require('../../assets/img/learn-more/step4.png')} alt=""/>
                                    <div>
                                        <span className='learn-more-content-desc-step'>Step5: </span>
                                        <span>Fill in mnemonic words in order according to the words you copied, and then click “Confirm”. And you will you've created a wallet with BSC address successfully!</span>
                                    </div>
                                    <img className='learn-more-content-desc-step-img' width='846' height='566'
                                         src={require('../../assets/img/learn-more/step5.png')} alt=""/>
                                    <div>Click on the "+" sign in the upper right corner to display the token assets you
                                        want to display through the Token contract search.
                                    </div>
                                    <b style={{background: 'red', color: 'white'}}>($LKK: Address)</b>
                                </div>
                            </div>
                            <div>
                                <div className="learn-more-content-title-level3">MetaMask wallet tutorial</div>
                                <div className='learn-more-content-desc'>
                                    <p>
                                        MetaMask is a plug-in type Ethereum wallet that is used on Google Chrome. You
                                        only need to add the correspondi-ng extension to Google Chrome which is more
                                        convenient.
                                    </p>
                                    <div>
                                        <span className='learn-more-content-desc-step'>Step1: </span>
                                        <span>Download and install MetaMask (URL: <a
                                            href="https://www.tokenpocket.pro/zh/download/app">https://metamask.io/download.html</a>). After the installation, the fox logo will appear on the upper right corner of the browser. Give a click and hen you can import your wallet or create a new wallet.</span>
                                    </div>
                                    <img className='learn-more-content-desc-step-img' width='846' height='386'
                                         src={require('../../assets/img/learn-more/meta-mask-wallet-tutorial-step1.png')}
                                         alt=""/>
                                    <div>
                                        <span className='learn-more-content-desc-step'>Step2: </span>
                                        <span>Add the BSC chain<br/> As there is no BSC chain listed on MetaMask by default, you need to add it manually. Click on the blockchain network at the top of the MetaMask interface, and then select custom RPC.</span>
                                    </div>
                                    <img className='learn-more-content-desc-step-img' width='846' height='516'
                                         src={require('../../assets/img/learn-more/meta-mask-wallet-tutorial-step2.png')}
                                         alt=""/>
                                    <div>
                                        <div>Fill in the following information one by one, and click save:</div>
                                        <div>Network：Binance Smartchain</div>
                                        <div>RPC URL：https://bsc-dataseed.binance.org/</div>
                                        <div>ID：56</div>
                                        <div>Symbol：BNB</div>
                                        <div>URL：https://www.bscscan.com/</div>
                                    </div>
                                    <img className='learn-more-content-desc-step-img' width='846' height='406'
                                         src={require('../../assets/img/learn-more/meta-mask-wallet-tutorial-step3.png')}
                                         alt=""/>
                                    <div>Later, you can see that there is an extra option for Binance Smartchain. You
                                        can import your existing BSC account p-rivate key into MetaMask.
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className='learn-more-content'>
                        <div className="learn-more-content-title-level2" id='1-0-2'>What’s Mosaic NFT?</div>
                        <div className='learn-more-content-desc'>
                            <p>
                                MF(MosaicFantasy) creates a digital creature world
                                where lives the fantastic creatures Mosaic with superpowers. E-ach Mosaic has unique
                                characteristics and attributes which decide its role in the battle. Players can not only
                                collect, train and command Mosaic, but also earn real money from those fantastic
                                creatures
                                when playing the game. Meanwhile, as an unique NFT asset, Mosaic can be traded and
                                transferred on the Blockchain.
                            </p>
                            <p>
                                In the game, Mosaic has different levels corresponding to
                                different combat effectiveness. Accordingly, the Mosaic NFT with different levels on the
                                Blockchain are related to different mining power.
                            </p>
                            <p className='link'>What’s mining power?</p>
                        </div>
                    </div>
                    <div className='learn-more-content'>
                        <div className="learn-more-content-title-level2" id='1-0-3'>How to get Mosaic NFT?</div>
                        <div className='learn-more-content-desc'>
                            <p>
                                MosaicNFT market has been launched. Players can buy Mosaic NFT through the MosaicNFT
                                market. Here follows the specific steps:
                            </p>
                            <p>
                                Step1: Open official website of Mosaic Fantasy (URL: <a
                                href="https://MosaicFantasy.io/">https://MosaicFantasy.io/</a>) and click
                                “Marketplace”.
                            </p>
                            <p>
                                Step2: Enter the MosaicNFT market and click “Loading” to connect your wallet.
                            </p>
                            <p>
                                Step3: Find the MosaicNFT you prefer by flitering and sorting through the interface.
                            </p>
                            <p>
                                Step4: Find more details about the MosaicNFT sold on the market. Click the button “Buy
                                now” to purchase the Mosaic on the condition that you have enough tokens in your wallet.
                            </p>
                            <p>
                                Step5: Double confirm and finish the purchase.
                            </p>
                            <p>
                                Step6: After buying the MosaicNFT successfully, click
                                “My Wallet” to check your digital asset details and find your MosaicNFT in “NFT”
                                section.
                            </p>
                        </div>
                    </div>

                    <div className='learn-more-content'>
                        <div className="learn-more-content-title-level2">How Mosaic NFT stakes mining?</div>
                        <div className='learn-more-content-desc'>
                            <p>
                                With MosaicNFT, players can participate in the mining of MosaicNFT mining pool to earn
                                extra profits. The specific operation steps are as follows:
                            </p>
                            <p>
                                Step1: Enter the official
                                website of MosaicFantasy (URL: <a
                                href="https://MosaicFantasy.io">https://MosaicFantasy.io</a>). Click ”Stake Mining” on
                                the top
                                navigation bar and find the Mosaic NFT mining interface. Click “Stake” to select the
                                Mosaic NFT for stake.
                            </p>
                            <p>
                                Step2: Check the income and harvest
                            </p>
                        </div>
                    </div>

                    <div className='learn-more-content'>
                        <div className="learn-more-content-title-level2" id='1-0-4'>What’s mining power?</div>
                        <div className="learn-more-content-title-level3">Introduction of mining power</div>
                        <div className='learn-more-content-desc'>
                            Consensus mechanism is essential component of Blockchain to establish trust and
                            acquire rights in the digital system. Mining Power is one of the important
                            measurements. As the original and most successful encrypted assets, BTC is built on
                            the PoW (Proof of work) which means whoever running computing devices to complete
                            proof of work can obtain BTC as a reward. Thus, the higher the mining power, the
                            more BTC they can obtain. However, with the development of algorithms and consensus
                            mechanisms in the blockchain field, mining power is not limited to the mining power
                            of hardware devices. Storage space, asset liquidity, and behaviors that contribute
                            to the project ecology can all be recognized in the field of encrypted assets. In
                            short, players have more opportunities to participate the construction of game
                            ecology to earn reward, not limited by the computing devices forces.
                        </div>
                        <div className="learn-more-content-title-level3">Hashrate in MosaicFantasy</div>
                        <div className='learn-more-content-desc'>
                            The Mosaic NFT of MosaicFantasy can be pledged to the Mosaic NFT ore pool for mining. The
                            basic computing power of Genesis NFT is between 10-1000. The better the quality of Mosaic
                            NFT, the higher the basic computing power. The higher the player's NFT mining power, the
                            more profit you get. In addition, the mining revenue obtained by mining power is not static,
                            and will be affected by the mining power and the total rewards of the mining pool.
                        </div>
                    </div>

                    <div className='learn-more-content'>
                        <div className="learn-more-content-title-level1" id='2-0'>About MosaicFantasy Game</div>
                        <div className="learn-more-content-title-level2" id='2-0-0'>Entering the game</div>
                        <div className='learn-more-content-desc'>
                            <p>
                                Players need at least 1 KingKongwill to enter the game and take PVE or PVP adventures
                                hereafter. Because players has to use KingKongwill to summon the Mosaic. Here are the
                                steps to entering the game.
                            </p>
                            <p>
                                <b>Step1: </b>
                                Enter the dnaxcat official website (URL: <a
                                href="https://MosaicFantasy.io/">https://MosaicFantasy.io/</a>).
                                Click “My QR code” on the top navigation bar of the homepage and transfer to the
                                marketplace.
                            </p>
                            <p>
                                <b>Step2: </b>
                                After entering into the Mosaic NFT market, click “Loading” to link to
                                the wallet.
                            </p>
                            <p>
                                <b>Step3: </b>
                                Buy “KingKongwill” through the mystery box on the market.
                            </p>
                            <p>
                                <b>Step4: </b>
                                Click
                                the “KingKongwill” sold on the market to find detail information. Please make sure that
                                there is sufficient amount of tokens in your wallet. Click “Buy now” to purchase the
                                KingKongwill.
                            </p>
                            <p>
                                <b>Step5: </b>
                                Double Confirm and finish the purchase.
                            </p>
                            <p>
                                <b>Step6: </b>
                                Click KingKongwill in
                                the "Wallet" of the page to activate your account. Then scan “My QR code” to entering
                                the
                                game.
                            </p>
                        </div>
                        <div className="learn-more-content-title-level2" id='2-0-1'>Background</div>
                        <div className='learn-more-content-desc'>
                            <p>
                                In the world of MosaicFantasy, there lives Mosaic and human race together. As a trainer,
                                human will tame and train these Mosaics to fight with others as a team. Others may
                                nourish Mosaics as pets, study Mosaic as a discipline, or just simply take advantage of
                                its superpower to complete kinds of tasks. According to fairy tale or legend, human and
                                Mosaic share a imitate time in the history.
                            </p>
                            <p>
                                “How to train your Mosaics?” is an essential
                                questions in this amazing world. People have different ways of training. And there is no
                                absolutely perfect training methods. Each way has both pros and cons. However, all these
                                training methods are ultimately divided into two categories. One is focusing on the
                                individual capability of the Mosaic and build strong relationship with it. The other is
                                concentrating on the diversity of the Mosaic cultivation.
                            </p>
                            <p>
                                According to the legend,
                                Mosaic heroes are the theme of many myths and human belief. People show their
                                friendliness and respect to Mosaics. However, there also exists people who want to make
                                use of Mosaics to fulfill their ambitions, such as acquire material reward or even
                                achieve some goals against the world. Therefore, just like the legendary story tells,
                                here comes the battle with Mosaic belonging to different forces. In MosaicFantasy, human
                                and Mosaics hold different powers. Human use their intelligence to endow Mosaic with
                                different consciousness. Mosaics obtain various superpowers. For example, the Mosaic
                                with ocean attribute can control the water, flame attribute has ability to make or
                                control fire and so on.
                            </p>
                        </div>
                        <div className="learn-more-content-title-level2" id='2-0-2'>Introduction of Mosaic</div>
                        <div className='learn-more-content-desc'>
                            <p>
                                There are 5 element attributes for Mosaic, including ocean, storm, flame, dawn and
                                nether. Each element attribute has 16 Mosaics. Here introduce one Mosaic from each
                                element attribute for example.
                            </p>
                            {
                                introductionMosaic.map((item, index) => Mosaic({item, index}))
                            }
                        </div>
                        <div className="learn-more-content-title-level2" id='2-0-3'>Gameplay</div>
                        <div className='learn-more-content-desc'>
                            <p>
                                Once entering the world of Mosaic, players need sufficient courage to challenge unknown
                                difficulties. More difficult the challenge is, the richer rewards players will obtain.
                                For example, if players challenge instance zones, PVE battle will gain you more EXP
                                (Experience). Players will acquire Tokens by challenging the PVP arena or achieve more
                                honors in Trial Tower. Summoning Mosaic gives the players more opportunities to get the
                                help of stronger Mosaic. Besides, Guild War allows more warriors gather together to
                                challenge the Guild to win more awards. There are diverse spectacular activities waiting
                                for you to explore in the Mosaic world.
                            </p>
                        </div>
                    </div>
                    <div className='learn-more-content'>
                        <div className="learn-more-content-title-level1" id='3-0'>Token Economy</div>
                        <div className="learn-more-content-title-level2" id='3-0-0'>What’s $LKK</div>
                        <div className='learn-more-content-desc'>
                            <p>
                                SLKK is the BEP-20 Governance Token for the MosaicFantasy world. The $LKK holders have
                                the right to vote for the key process in the game governance. Players take part in the
                                PVP arena and Guild battle to win SLKK as a reward.
                            </p>
                        </div>
                        <div className="learn-more-content-title-level3">Total Supply: Initial 1000,000,000 to Eventual
                            700,000,000
                        </div>
                        <img className='mb-small' src={require('../../assets/img/learn-more/What’s-$LKK-1.png')}
                             width='846' height='280' alt=""/>
                        <img className='mb-small' src={require('../../assets/img/learn-more/What’s-$LKK-2.png')}
                             width='846' height='506' alt=""/>
                        <div className="learn-more-content-title-level3">Total Supply: Initial 1000,000,000 to
                            Eventual
                        </div>
                        <img className='mb-small' src={require('../../assets/img/learn-more/What’s-$LKK-3.png')}
                             width='846' height='549' alt=""/>
                        <div className="learn-more-content-title-level2" id='3-0-1'>What’s $BLP</div>
                        <div className='learn-more-content-desc'>
                            <p>
                                $BLP (Blue Lucky potion) is the game token in the MF (MosaicFantasy) world. Players can
                                acquire or consume $BLP by participate PVE adventures or daily targets. Player can also
                                trade $BLP in the secondary market.
                                The total amount of the $BLP is not set previously. But the recycling supplies are
                                strictly controlled by token burn mechanism. Player can consume $BLP to upgrade
                                equipment or game roles in the game (Not in the NFT market). The distribution of $BLP is
                                as follows:
                            </p>
                        </div>
                        <img className='mb-small' src={require('../../assets/img/learn-more/What’s-$BLP-1.png')}
                             width='846' height='241' alt=""/>
                        <div className='learn-more-content-desc'>
                            <p>
                                $BLP can only be unlocked and used immediately when players hold enough $BLP equal with
                                10% total $BLP amount. The rest 90% will remain locked and can only be unlocked when
                                liquidity is applied in $ BLP/BUSD.
                            </p>
                        </div>
                        <div className="learn-more-content-title-level2" id='3-0-2'>Deflation Model</div>
                        <div className='learn-more-content-desc'>
                            <p>
                                In the era of Web 3.0, we believe in decentralized governance. The code is law. After
                                the game stepping into stable operation, part of the income of MF (Mosaic Fantasy) will
                                be put into community account. $LKK holders have the rights to manage and govern the
                                account department when the governance structure are totally decentralized. And some
                                part of MF (Mosaic Fantasy) income will be used for $LKK repurchase and burn by smart
                                contract directly so as to keep sustaining deflation of $LKK.
                            </p>
                        </div>
                    </div>

                    <div className='learn-more-content'>
                        <div className="learn-more-content-title-level1" id='4-0'>Ecological Strategy</div>
                        <div className="learn-more-content-desc">
                            <p>
                                MF (MosaicFantasy) will be online at January 10th,2020. And the LKK public blockchain
                                will be completed in the summer of 2022 to establish a totally new metaverse ecology of
                                Web 3.0. $LKK will become the decentralized game Metaverse. By exploring the path
                                between players and P2E games, LKK make the game much more enjoyable and profitable.
                            </p>
                            <p>
                                With 350K+ community members keep growing, MF will overspread to the whole world!
                            </p>
                        </div>
                    </div>
                    <div className='learn-more-content'>
                        <div className="learn-more-content-title-level1" id='5-0'>Contact Us</div>
                        <div className="learn-more-content-desc">
                            <p>
                                <b>Website: </b>
                                www.MosaicFantasy.io
                            </p>
                        </div>
                    </div>
                    <div className='learn-more-content'>
                        <div className="learn-more-content-title-level1" id='6-0'>Audit</div>
                        <div className="learn-more-content-desc">
                            <p>
                                Manwu has completed the audit of the MosaicFantasy contract.
                                <br/>
                                <b style={{background: 'red', color: 'white'}}>（Audition report Address）</b>
                            </p>
                        </div>
                    </div>
                    <div className='learn-more-content' style={{height: 'calc(100% - 250px)'}}>
                    </div>
                </div>
            </div>
        )
    }
}
