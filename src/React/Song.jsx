import { Component } from "react";
import { ArrayList } from "./arrayList";
import CSS from "../CSS/Song.module.css"

export default class Song extends Component {
    constructor() {
        super();

        this.state = {
            seekBarValue: 0,
            currentTimeToBeDisplay: "0:00",
        }
        this.musicDuration = "-:--";
        this.intervalId = null; // Variable to store the interval ID
    }


    componentDidMount() {
        this.updateSongState(this.props.currentSong);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.currentSongIndex !== this.props.currentSongIndex) {
            const { currentSong } = this.props;
            this.updateSongState(currentSong);
        }
    }

    updateSongState = (currentSong) => {
        const { btnFunction, currentSongIndex } = this.props;
        this.musicDuration = this.formatTime(ArrayList.Songs[currentSongIndex].duration);

        this.setState({
            seekBarValue: currentSong.currentTime,
            currentTimeToBeDisplay: this.formatTime(currentSong.currentTime),
        });

        this.intervalId ? clearInterval(this.intervalId) : this.intervalId = null;

        this.intervalId = setInterval(() => {
            if (Math.round(currentSong.currentTime) >= Math.round(currentSong.duration)) {

                clearInterval(this.intervalId);
                btnFunction.forwardBtn();
                return;
            }
            this.setState({
                seekBarValue: currentSong.currentTime,
                currentTimeToBeDisplay: this.formatTime(currentSong.currentTime),
            });
        }, 1000);
    };


    formatTime = (time) => {
        let min = Math.floor(time / 60);
        if (min < 10) {
            min = `0${min}`;
        }
         let sec = Math.floor(time % 60);
        if (sec < 10) {
            sec = `0${sec}`;
        }
        return `${min}  :  ${sec}`;
    }


    seekBarChange = (value) => {
        const { currentSong } = this.props;

        currentSong.currentTime = value;
        this.updateSongState(currentSong);
    }

    render() {

        const { currentSongIndex, currentSong } = this.props;
        const song = ArrayList.Songs[currentSongIndex];

        return (<>

            <div className={CSS.musicPlayer}>
                <div className={CSS.backgroundImage} style={{ backgroundImage: `url(${song.icon})` }}></div>
                <div className={CSS.songDetails}>
                    <div className={CSS.songImage}>
                        <img src={song.icon} alt="" />
                    </div>
                    <div className={CSS.songName}>
                        <h3>{song.name}</h3>
                    </div>
                </div>
                <div className={CSS.seekBarAndTime}>
                    <div className={CSS.seekBarBox}>
                        <input type="range" max={song.duration} value={this.state.seekBarValue} onChange={(event) => this.seekBarChange(event.target.value)} className={CSS.seekBar} />
                    </div>
                    <div className={CSS.seekTime}>
                        <div className={CSS.currentTime}>
                            {this.state.currentTimeToBeDisplay}
                        </div>
                        <div className={CSS.totalTime}>
                            {this.musicDuration}
                        </div>
                    </div>
                </div>

            </div>
        </>)
    }

}
