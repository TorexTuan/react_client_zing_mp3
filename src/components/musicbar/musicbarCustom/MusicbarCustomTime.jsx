import { useContext, useEffect, useState} from "react";
import Slider from "react-input-slider"
import { CurrentSongContext } from "../../../contextProviders/CurrentSongProvider";

const MusicbarCustomTime = (props) => {

  const currentSong = useContext(CurrentSongContext)
  const [currentTime, setCurrentTime] = useState(0)

  const handleSongTime = ({x}) => {
    props.audioRef.current.currentTime = x
    setCurrentTime(x)
  }

  return (
    <div className="musicbar_custom_time">
        <p className="musicbar_custom_time_min">00:00</p>
        {/* <input 
          type="range" value={0} step="1" min="0" max="100" 
          className="musicbar_custom_time_bar"
          // onChange={handleSongTime}
        /> */}
        <Slider
          className="musicbar_custom_time_bar"
          axis="x"
          xstep={1}
          xmax={props.duration}
          x={currentTime}
          onChange={handleSongTime}
        />
        <p className="musicbar_custom_time_max">{currentSong.time}</p>
    </div>
  );
};

export default MusicbarCustomTime;
