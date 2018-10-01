import React, {Component} from 'react';

class PlayerBar extends Component {
    render(){
        return (
            <section className="player-bar">
                <section id="buttons">
                <button id="previous" onClick={this.props.handlePreviousClick}>
                    <span className="ion-ios-skip-backward"></span>
                </button>
                <button id="play-pause" onClick={this.props.handleSongClick}>
                    <span className={this.props.isPlaying ? "ion-ios-pause": "ion-ios-play"}></span>
                </button>
                <button id="next" onClick={this.props.handleNextClick}>
                    <span className="ion-ios-skip-forward"></span>
                </button>
                </section>
                <section id="timeControl">
                    <div className="current-time">-:--</div>
                    <input type="range" className="seek-bar" value="0"></input>
                    <div className="total-time">-:--</div>               
                </section>
                <section id="volume-control">
                    <div className="icon ion-volume-low"></div>
                    <input type="range" className="seek-bar" value="80"></input>
                    <div className="icon ion-volume-high"></div>
                </section>
            </section>
        );
    }
}

export default PlayerBar;