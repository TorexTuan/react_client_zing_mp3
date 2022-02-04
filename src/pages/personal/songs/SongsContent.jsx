import { useState } from 'react';

import songs from '../../../fake-data/songs';

const SongsContent = () => {

    const [activeSong, setActiveSong] = useState(0)

  return (
    <>
        {
            songs.map((song, index) => (
                <li 
                    key={index} 
                    className={`user_overview_content_song ${activeSong === index ? 'active' : ''}`}
                    onClick={() => setActiveSong(index)}
                >
                    <div className="user_overview_song_image_wrapper">
                        <div className="user_overview_icon_wrapper hide-on-mobile hide-on-tablet">
                            <i className="bi bi-music-note-beamed songs_icon"></i>
                        </div>
                        <div className="user_overview_song_image_inner">
                            <i className="bi bi-play-fill user_overview_play_icon"></i>
                            <img src={song.thumnail} alt="" className="user_overview_song_image"/>
                            <div className="user_overview_playing_icon_wrapper hide-btn">
                                <img src="./images/song-image/icon-playing.gif" alt="" className="user_overview_playing_icon"/>
                            </div>
                        </div>   
                        <div className="user_overview_song_info">
                            <p className="user_overview_song_name limit-text">
                                {song.name}
                            </p>
                            <div className="user_overview_song_singers limit-text">
                                {song.singers}
                            </div>
                        </div> 
                    </div>
                    <p className="user_overview_song_time hide-on-mobile hide-on-tablet">
                        {song.time}
                    </p>
                    <div className="user_overview_song_options">
                        <div className="user_overview_song_icon hide-on-mobile">
                            <i className="bi bi-mic-fill"></i> 
                        </div>
                        <div className="user_overview_song_icon hide-on-mobile">
                            <i className="bi bi-heart-fill"></i>
                        </div>
                        <div className="user_overview_song_icon hide-on-tablet">
                            <i className="bi bi-three-dots"></i>
                        </div>
                    </div>
                </li>
            ))
        }
    </>
  );
};

export default SongsContent;
