import React from "react";
import './index.scss'
import Tree from '../../components/Tree/index.jsx';

export default class LearnMore extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            treeData: [
                {
                    title: 'Welcome to MosaicFantasy',
                    key: '0-0',
                },
                {
                    title: 'About MosaicFantasy Platform',
                    key: '1-0',
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
                            children:[
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
                                    key: '2-0-2-2',
                                },
                                {
                                    title: 'Dawn Mosaic',
                                    key: '2-0-2-3',
                                },
                                {
                                    title: 'Nether Mosaic',
                                    key: '2-0-2-4',
                                },
                            ]
                        },
                        {
                            title: 'Gameplay',
                            key: '2-0-2',
                        },
                    ],
                },
            ]
        }
    }

    render() {
        const tree = this.state.treeData
        return (
            <div className='learn-more'>
                <div className='learn-more-menu'>
                    <Tree
                        treeData={tree}
                        onSelect={() => this.onSelect()}
                        defaultExpandedKeys={['0-0-0']}
                    />
                </div>
                <div className='learn-more-content'>main</div>
            </div>
        )
    }
}
