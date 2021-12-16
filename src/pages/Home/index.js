import React from "react";
import './index.scss'



export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasVerticalScrolled: false
        };
    }

    //在componentDidMount，进行scroll事件的注册，绑定一个函数，让这个函数进行监听处理
    componentDidMount() {
        window.addEventListener('scroll', this.bindHandleScroll)
    }

    //在componentWillUnmount，进行scroll事件的注销
    componentWillUnmount() {
        window.removeEventListener('scroll', this.bindHandleScroll);
    }

    bindHandleScroll = (event) => {
        const  target  =  document.getElementById('target');
        console.log('target', target)
        const  clientRect  =  target.getBoundingClientRect();
        console.log(clientRect);
        // 滚动的高度
        const scrollTop = (event.srcElement ? event.srcElement.documentElement.scrollTop : false)
            || window.pageYOffset
            || (event.srcElement ? event.srcElement.body.scrollTop : 0);
        // console.info('event', event)
        // console.info('scrollTop', scrollTop)
        this.isInViewPort(event)
        this.setState({
            hasVerticalScrolled: scrollTop > 10
        })
    }

    isInViewPort(element) {
        const viewWidth = window.innerWidth || document.documentElement.clientWidth;
        const viewHeight = window.innerHeight || document.documentElement.clientHeight;
        const {top, right, bottom, left} = element.getBoundingClientRect();
        return top >= 0 && left >= 0 && right <= viewWidth && bottom <= viewHeight;
    }

    render() {

        // const  clientRect  =  target.getBoundingClientRect();
        // console.log(clientRect);

        return (
            <div className='target' id='target'>
                {

                    [0, 1, 2, 3, 4].map(item =>
                        <div className="header-container" id={item}>
                            <div className="headerTitle-container">
                                {item}
                            </div>
                        </div>
                    )
                }

            </div>

        )
    }
}
