import React,{Component} from 'react'
import {games} from '../../games.json'


class SliderMaskMain extends Component{

    render(){
        const mainSliders = games.map((item)=>(
            <div className="games__slide swiper-slide" key={item.id}>
                <div className="games__list__item">
                    <div className="games__list__wrap">
                        <a href={item.link}><img src={item.img} alt="Game"/></a>
                    </div>
                    <span className="games__list__name">{item.name}</span>
                </div>
            </div>
        ))
        return(
            <div className="slider__mask__main">
                <div className="games__slider swiper-container" data-slider="games">
                    <div className="games__slider swiper-wrapper">
                        {mainSliders}
                    </div>
                </div>
            </div>
        )
    }
}

export default SliderMaskMain