import { useContext, useEffect, useRef } from "react";
import { CurrentSongContext } from "../../../contextProviders/CurrentSongProvider";
import { PlayingContext } from "../../../contextProviders/PlayingProvider";

const MusicbarCustomTime = () => {

  const audioRef = useRef()
  const currentSong = useContext(CurrentSongContext)
  const [playing] = useContext(PlayingContext)

  useEffect(() => {
    if(playing) {
      audioRef.current.play()
      console.log('playing')
    }else {
      audioRef.current.pause()
    }
  })

  return (
    <div className="musicbar_custom_time">
        <p className="musicbar_custom_time_min">00:00</p>
        <input type="range" value="0" step="1" min="0" max="100" className="musicbar_custom_time_bar"/>
        <p className="musicbar_custom_time_max">{currentSong.time}</p>
        <audio ref={audioRef} src={currentSong.link} className="song_audio"></audio>
    </div>
  );
};

export default MusicbarCustomTime;
