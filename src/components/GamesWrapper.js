import React,{Component} from 'react'
import {games} from '../../games.json'

class GamesWrapper extends Component{


    render(){
        const games__nav__slides = games.map((item)=>(
            <div className="games__nav__slide swiper-slide" key={'g'+item.id}>
              <div className="games__nav__list__item">
                <img src={item.img} alt="Game" />
              </div>
            </div>
        ))
        const games__selected = []
        for(var i=0;i<=20;i++){
            games__selected.push(<div key={'asd'+i}>i</div>)
        }
        return(
                                    <div className="games__wrapper">
                                        <div className="swiper-button-prev" />
                                        <div className="slider__mask">
                                            <div className="games__nav__slider swiper-container" data-topnav data-slider="thumbs-games">
                                                <div className="swiper-wrapper">
                                                   {games__nav__slides}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="games__selected">
                                           {games__selected}
                                        </div>
                                        <div className="swiper-button-next" />
                                    </div>
        )

    }

}


export default GamesWrapper