import React,{Component} from 'react'
import SliderMaskMain from './components/SliderMaskMain'
import GamesWrapper from './components/GamesWrapper'
class App extends Component{


    render(){
        return(
            <div>
                <div className="games__layout__top">
                    <div className="games__search" data-search>
                        <form className="form form--games" method="post" action="#">
                            <input type="text" className="games__search__field" autoFocus="autofocus" />
                        </form>
                    </div>
                    <GamesWrapper/>
                </div>
                <div className="header--mobile">
                    <a href="#" className="icon--toggle" data-expand />
                    <div data-logo-holder />
                    <div data-search-icon-holder />
                </div>
                <SliderMaskMain/>
            </div>
        )
    }
}

export default App