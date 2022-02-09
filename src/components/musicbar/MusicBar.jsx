import { useState } from "react";

import MusicbarInfo from "./MusicbarInfo";
import MusicbarTools from "./MusicbarTools";
import Popup from "./Popup";
import MusicbarCustomSong from "./musicbarCustom/MusicbarCustomSong";
import MusicbarCustomTime from "./musicbarCustom/MusicbarCustomTime";

const MusicBar = () => {

    const [popup, setPopup] = useState('down')

  return (
    <>
    <div className="musicbar" onClick={() => setPopup('up')}>
        <MusicbarInfo />
        <div className="musicbar_custom hide-on-mobile">
            <MusicbarCustomSong />
            <MusicbarCustomTime />
        </div>
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
    <Popup popup={popup} handlePopup={setPopup}/>
    </>
  );
};

export default MusicBar;
