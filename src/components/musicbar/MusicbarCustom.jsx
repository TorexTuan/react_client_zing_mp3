
const MusicbarCustom = () => {
  return (
    <div className="musicbar_custom hide-on-mobile">
        <div className="musicbar_custom_play">
            <button className="musicbar_custom_play_icon">
                <i className="bi bi-shuffle"></i>
            </button>
            <button className="musicbar_custom_play_icon">
                <i className="bi bi-skip-start-fill"></i>
            </button>
            <button className="musicbar_custom_play_icon custom_play_pause_wrapper">
                <i className="bi bi-pause hide-btn" ></i>
                <i className="bi bi-play-fill"></i>
            </button>
            <button className="musicbar_custom_play_icon">
                <i className="bi bi-skip-end-fill"></i>
            </button>
            <button className="musicbar_custom_play_icon">
                <i className="bi bi-arrow-repeat"></i>
            </button>
        </div>
        <div className="musicbar_custom_time">
            <p className="musicbar_custom_time_min">00:00</p>
            <input type="range" value="0" step="1" min="0" max="100" className="musicbar_custom_time_bar"/>
            <p className="musicbar_custom_time_max">04:04</p>
            <audio src="" className="song_audio"></audio>
        </div>
    </div>
  );
};

export default MusicbarCustom;
