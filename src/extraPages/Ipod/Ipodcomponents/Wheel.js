import React from "react";


import wheelStyle from '../styles/wheel.module.css'



export default class Wheel extends React.Component {

    render() {
        //destructuring
        const { rotateWheel, changePage, toggleMainMenu, toggle, prevSong, nextSong } = this.props;
        return (
            <>
                {/* adding the functions on the events */}
                <div className={wheelStyle.wheelContainer}>
                    <div id="rotating-wheel" className={wheelStyle.redWheel} onMouseOver={rotateWheel}>
                        <div className={wheelStyle.menuBtn} onClick={toggleMainMenu}>MENU</div>
                        <img className={wheelStyle.rewind} onClick={prevSong} src="https://cdn-icons-png.flaticon.com/128/3/3778.png" alt="prev" />
                        <img className={wheelStyle.forward} onClick={nextSong} src="https://cdn-icons-png.flaticon.com/128/1/1824.png" alt="next"/>
                        <img className={wheelStyle.playPause}  onClick={toggle} src="https://cdn-icons-png.flaticon.com/128/7960/7960808.png" alt="play pause" />
                        <div className={wheelStyle.selectWheel} onClick={changePage}></div>
                    </div>

                </div>
            </>
        )
    }
}