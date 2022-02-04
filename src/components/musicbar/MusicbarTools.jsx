
const MusicbarTools = () => {
  return (
    <div className="musicbar_tools hide-on-mobile">
        <button className="musicbar_tools_icon hide-on-tablet">
            <i className="bi bi-camera-video"></i>
        </button>
        <button className="musicbar_tools_icon hide-on-tablet">
            <i className="bi bi-mic"></i>
        </button>
        <div className="musicbar_tools_wrapper">
            <button className="musicbar_tools_icon">
                <i className="bi bi-volume-up volume-btn"></i>
            </button>
            <input type="range" value="100" step="1" min="0" max="100" className="musicbar_tools_volume_bar"/>
        </div>
        <button className="musicbar_tools_icon">
            <i className="bi bi-music-note-list"></i>
        </button>
    </div>
  );
};

export default MusicbarTools;
