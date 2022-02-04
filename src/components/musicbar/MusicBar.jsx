import MusicbarInfo from "./MusicbarInfo";
import MusicbarCustom from "./MusicbarCustom";
import MusicbarTools from "./MusicbarTools";

const MusicBar = () => {
  return (
    <div className="musicbar">
        <MusicbarInfo />
        <MusicbarCustom />
        <MusicbarTools />
        <div className="musicbar_mobile_custom display-on-mobile hide-on-computer hide-on-tablet">
            <button className="musicbar_custom_play_icon musicbar_mobile_custom_skip">
                <i className="bi bi-skip-start-fill"></i>
            </button>
            <button className="musicbar_custom_play_icon musicbar_mobile_custom_play_pause">
                <i className="bi bi-pause hide-btn"></i>
                <i className="bi bi-play-fill"></i>
            </button>
            <button className="musicbar_custom_play_icon musicbar_mobile_custom_skip">
                <i className="bi bi-skip-end-fill"></i>
            </button>
        </div>
    </div>
  );
};

export default MusicBar;
