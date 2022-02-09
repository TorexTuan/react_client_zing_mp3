import { useEffect, useRef, useState, useContext } from "react";
import { PlayingContext } from "../../../contextProviders/PlayingProvider";
import songs from "../../../fake-data/songs";
import eventBus from "../../../middlewares/eventBus";
import storage from "../../../storage/storage";

const MusicbarCustomSong = () => {

    const [playing, setPlaying] = useContext(PlayingContext)

    const playBtnRef = useRef()
    const [currentIndex, setCurrentIndex] = useState(storage.get())

    const handlePlayBtn = (e) => {
        e.stopPropagation()
        setPlaying(!playing)
    }

    const handleNextSong = (e) => {
        e.stopPropagation()
        setCurrentIndex(prevIndex => {
            if(prevIndex.currentIndex === songs.length - 1) {
                return {currentIndex: 0}
            }
            return {currentIndex: prevIndex.currentIndex + 1}
        })
    }

    const handlePrevSong = (e) => {
        e.stopPropagation()
        setCurrentIndex(prevIndex => {
            if(prevIndex.currentIndex === 0) {
                return {currentIndex: songs.length - 1}
            }
            return {currentIndex: prevIndex.currentIndex - 1}
        })
    }

    useEffect(() => {
        if(!playing) {
            playBtnRef.current.classList.add('bi-play-fill')
            playBtnRef.current.classList.remove('bi-pause')
        }else {
            playBtnRef.current.classList.add('bi-pause')
            playBtnRef.current.classList.remove('bi-play-fill')
        }
    })

    useEffect(() => {
        storage.set(currentIndex)
        eventBus.dispatch('currentIndex', songs[currentIndex.currentIndex])
    }, [currentIndex])

  return (
    <div className="musicbar_custom_play">
        <button className="musicbar_custom_play_icon">
            <i className="bi bi-shuffle"></i>   
        </button>
        <button className="musicbar_custom_play_icon" onClick={handlePrevSong}>
            <i className="bi bi-skip-start-fill" ></i>
        </button>
        <button className="musicbar_custom_play_icon custom_play_pause_wrapper">
            <i className="bi bi-play-fill" ref={playBtnRef} onClick={handlePlayBtn}></i>
        </button>
        <button className="musicbar_custom_play_icon">
            <i className="bi bi-skip-end-fill" onClick={handleNextSong}></i>
        </button>
        <button className="musicbar_custom_play_icon">
            <i className="bi bi-arrow-repeat"></i>
        </button>
    </div>
  );
};

export default MusicbarCustomSong;
