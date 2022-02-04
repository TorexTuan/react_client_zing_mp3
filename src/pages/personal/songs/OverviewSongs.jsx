
import Slides from '../Slides';
import SongsContent from "./SongsContent";

const OverviewSongs = () => {

    return (
        <div className="user_overview_songs row">
        {/* songs header  */}
        <div className="user_overview_header col l-12 m-12 c-12">
            <p className="user_overview_header_title">
                BÀI HÁT <i className="bi bi-chevron-right user_overview_tittle_icon"></i>
            </p>
            <div className="user_overview_header_custom">
                <p className="user_overview_custom_upload zing-mp3-btn hide-on-mobile">
                    <input type="file" id="user_overview_upload_input" />
                    <label htmlFor="user_overview_upload_input">
                        <i className="bi bi-upload user_overview_custom_icon"></i>
                        TẢI LÊN
                    </label>
                </p>
                <p className="user_overview_custom_playall zing-mp3-btn">
                    <i className="bi bi-play-fill user_overview_custom_icon"></i>
                    PHÁT TẤT CẢ
                </p>
            </div>
        </div>
        {/* songs content  */}
        <div className="user_overview_content col l-12 m-12 c-12">
            <Slides />
            <ul className="user_overview_content_songs c-12">
                <SongsContent />
            </ul>
        </div>
    </div>    
       
    );
};

export default OverviewSongs;
