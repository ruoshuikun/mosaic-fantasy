import React from "react";
import anime from 'animejs/lib/anime.es.js';
import './index.scss'
// import '../../static/js/anime.min.js'
// import '../../static/js/pieces.min'
// import '../../static/js/demo'


export default class Market extends React.Component {

    componentDidMount() {
        console.log('componentDidMount')
        this.load('./js/anime.min.js', () => {
            console.log('./js/anime.min.js')
            this.load('./js/pieces.min.js', () => {
                console.log('./js/pieces.min.js')
                this.load('./js/demo.js', () => {
                    console.log('./js/demo')
                })
            })
        })


    }

    load(sUrl, fCallback) {
        var _script = document.createElement('script');
        // _script.setAttribute('charset', 'gbk');
        // _script.setAttribute('type', 'text/javascript');
        _script.setAttribute('src', sUrl);
        document.getElementsByTagName('head')[0].appendChild(_script);

        //fCallback();
        if (fCallback != undefined) {
            fCallback();
        }
    }

    render() {
        const testData = [
            {
                url: require('../../assets/img/learn-more/mosaic-test/1.png'),
                name: '1'
            },
            {
                url: require('../../assets/img/learn-more/mosaic-test/2.png'),
                name: '2'
            },
            {
                url: require('../../assets/img/learn-more/mosaic-test/3.png'),
                name: '3'
            },
            {
                url: require('../../assets/img/learn-more/mosaic-test/4.png'),
                name: '4'
            },
            {
                url: require('../../assets/img/learn-more/mosaic-test/5.png'),
                name: '5'
            },
        ]
        return (
            <div>
                <div className="content">
                    <div className="pieces-slider">
                        {
                            testData.map(item =>
                                <div className="pieces-slider__slide" key={item.name}>
                                    <img className="pieces-slider__image" src={item.url} alt=""/>
                                    <h2 className="pieces-slider__text">{item.name}</h2>
                                </div>
                            )
                        }
                        <canvas className="pieces-slider__canvas"></canvas>
                    </div>
                </div>
            </div>
        )
    }
}
