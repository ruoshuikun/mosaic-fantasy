import React from "react";
import './index.scss'

export default class Market extends React.Component {
    render() {
        const piecesSlider = [
            // {
            //     url: require('../../assets/img/learn-more/mosaic/test.png'),
            //     name: 'test'
            // },
            {
                url: require('../../assets/img/learn-more/mosaic/Zeklahm.png'),
                name: 'Zeklahm'
            },
            {
                url: require('../../assets/img/learn-more/mosaic/Sphinx.png'),
                name: 'Sphinx'
            },
            {
                url: require('../../assets/img/learn-more/mosaic/Radon.png'),
                name: 'Radon'
            },
            {
                url: require('../../assets/img/learn-more/mosaic/Titan.png'),
                name: 'Titan'
            },
            {
                url: require('../../assets/img/learn-more/mosaic/Typhon.png'),
                name: 'Typhon'
            },
        ]
        return (
            <div>
                <div className="content">
                    <div className="pieces-slider">
                        {
                            piecesSlider.map(item =>
                                <div className="pieces-slider__slide" key={item.name}>
                                    <img className="pieces-slider__image" src={item.url} alt=""/>
                                    <h2 className="pieces-slider__text">{item.name}</h2>
                                </div>
                            )
                        }
                        {/*<button className="pieces-slider__button pieces-slider__button--prev">prev</button>*/}
                        {/*<button className="pieces-slider__button pieces-slider__button--next">next</button>*/}
                        <canvas className="pieces-slider__canvas"></canvas>
                    </div>
                </div>
            </div>
        )
    }
}
