import React from 'react';
// import arrowDownGray from '../../assets/img/arraw-down-gray.png';
// import arrowUpGray from '../../assets/img/arraw-up-gray.png';
import arrowUpGray from '../../assets/img/arraw-down-gray.png';
import arrowDownGray from '../../assets/img/arraw-right-gray.png';
import './index.scss'

class Tree extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            keys: []
        }
    }

    componentWillMount() {
        const {defaultExpandedKeys, treeData, children} = this.props;
        //处理默认样式
        if (treeData && treeData.length > 0) {
            if (Array.isArray(defaultExpandedKeys) && defaultExpandedKeys.length > 0) {
                treeData.map((item) => {
                    if (defaultExpandedKeys.includes(String(item.key))) {
                        item.isOpenChild = true;//展开子节点
                    }
                });
            } else {
                treeData.map((item) => {
                    item.isOpenChild = true;//展开子节点
                    if (item.children) {
                        item.children.map(childrenItem => {
                            childrenItem.isOpenChild = true;//展开子节点
                        })
                    }
                });
            }
        }
        //处理自定义样式
        if (children && children.length > 0) {
            let keys = [];
            children.map((item) => {
                keys.push(item.key)
            });
            if (Array.isArray(defaultExpandedKeys) && defaultExpandedKeys.length > 0) {
                children.map((item1) => {
                    if (defaultExpandedKeys.includes(item1.key)) {
                        if (Array.isArray(item1.props.children) && item1.props.children.length > 0) {
                            item1.props.children.map((item2) => {
                                keys.push(item2.key);
                            });
                        }
                    }
                });
            }
            this.setState({
                keys
            });
        }
    }

    onTrigger(e, item) {
        e.stopPropagation();
        let keys = this.state.keys;
        if (item.props.children && item.props.children.length > 0) {
            item.props.children.map((item1) => {
                //如果没有子节点就添加
                if (!keys.includes(item1.key)) {
                    keys.push(item1.key);
                } else {
                    //否则过滤子节点
                    keys = keys.filter(item2 => item2 != item1.key);
                }
            });
        }
        this.setState({
            keys
        })
    }

    onSelect(e, item) {
        const {onSelect} = this.props;
        if (onSelect) {
            onSelect(item);
        }
    }

    onTrigger1(e, item) {

        e.stopPropagation();
        item.isOpenChild = !item.isOpenChild;
        this.setState({
            isRefresh: !this.state.isRefresh
        })
    }

    scrollToAnchor = (anchorName) => {
        //通过id anchorname是传来的id
        if (anchorName) {
            // 找到锚点
            let anchorElement = document.getElementById(anchorName);
            // 如果对应id的锚点存在，就跳转到锚点
            // scrollIntoView让页面滚动到对应可视化区域内
            if (anchorElement) {
                anchorElement.scrollIntoView({block: 'start', behavior: 'smooth'});
            }
        }
    }

    loopTree(arr) {
        return arr.map((item, index) => {
            return <div key={index} className='tree-wrap'>
                {
                    <div className="tree-title" id={'menu-' + item.key} style={{textIndent: item.key.length * 13+'px'}}>
                        <span onClick={() => this.scrollToAnchor(item.key)}>{item.title}</span>
                        {
                            item.children
                                ?
                                <img
                                    src={item.isOpenChild ? arrowUpGray : arrowDownGray}
                                    className="tree-arrow" alt=""
                                    onClick={(e) => this.onTrigger1(e, item)}
                                />
                                : null
                        }
                    </div>
                }
                {
                    item.children && item.children.length && item.isOpenChild ?
                        <div className={item.isOpenChild ? "cm-display-block " : "cm-display-none"}>
                            <div>{this.loopTree(item.children)}</div>
                        </div> : null
                }
            </div>
        })
    }

    loopChild(arr) {
        const {keys} = this.state;
        return arr.map((item, index) => {
            return <div key={index} className={keys.includes(item.key) ? "cm-display-block" : "cm-display-none"}>
                {
                    <div className="cm-flex cm-jc-sb cm-p-01 cm-ai-c cm-cursor-p">
                        <div className="cm-flex-1" onClick={(e) => this.onSelect(e, item)}>{item}</div>
                        {
                            item.props.children ?
                                <div onClick={(e) => this.onTrigger(e, item)} className="cm-ml-01 cm-p-005">
                                    <img src={keys.includes(item.props.children[0].key) ? arrowUpGray : arrowDownGray}
                                         className="tree-arrow" alt=""/>
                                </div> : null
                        }
                    </div>
                }
                {
                    item.props.children && item.props.children.length ?
                        <div className="pl-default">{this.loopChild(item.props.children)}</div> : null
                }
            </div>
        })
    }

    render() {
        const {treeData, children} = this.props;
        return (
            <>
                {treeData && treeData.length > 0 ? this.loopTree(treeData) : this.loopChild(children)}
            </>
        )
    }
}

class TreeNode extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {title} = this.props;
        return <div className="cm-c-333">
            {title}
        </div>
    }
}

Tree.TreeNode = TreeNode;
export default Tree;
