import React from 'react';

import playlists from '../../../fake-data/playlists';
import PlaylistContent from './PlaylistContent';

const Playlist = () => {
  return (
    <div className="user_overview_playlist row">
        <div className="user_overview_header col l-12">
            <p className="user_overview_header_title">
                PLAYLIST
            </p>
        </div>
        <div className="user_overview_content">
            <ul className="user_overview_content_posts">
                <li className="user_overview_content_post margin-bot-30 col col-15 l-2-4 m-3 c-4">
                    <div className="user_overview_newplay_wrapper">
                        <i className="bi bi-plus-lg user_overview_plus_icon"></i>
                        <p className="user_overview_new_playlist">Tạo playlist mới</p>
                    </div>
                </li>
                {
                    playlists.map((playlist, index) => (
                        <li key={index} className="user_overview_content_post margin-bot-30 col col-15 l-2-4 m-3 c-4">
                            <PlaylistContent playlist={playlist} />
                        </li>
                    ))
                }
            </ul>
        </div>
    </div>
  );
};

export default Playlist;
