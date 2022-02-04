import MusicbarCustom from "../musicbar/MusicbarCustom";
import MusicbarInfo from "../musicbar/MusicbarInfo";
import MusicbarTools from "../musicbar/MusicbarTools";

const Popup = () => {
  return (
    <div class="popup down">
        <div class="popup_wrapper">
            <div class="popup_logo">
                <img src="./images/image-slide/main-logo.svg" alt="" class="popup_logo_image hide-on-tablet hide-on-mobile"/>
                <img src="./images/image-slide/small-logo.svg" alt="" class="popup_small_logo_image hide-on-computer display-on-tablet display-on-mobile"/>
            </div>
            <div class="popup_middle">
                <div class="popup_middle_nav">
                    <p class="popup_middle_nav_item active">
                        DANH SÁCH PHÁT
                    </p>
                    <p class="popup_middle_nav_item">
                        KARAOKE
                    </p>
                    <p class="popup_middle_nav_item hide-on-mobile">
                        LỜI BÀI HÁT
                    </p>
                </div>
                <div class="popup_middle_song">
                    <div class="popup_middle_song_disk">
                        <div class="popup_middle_song_disk_image"></div>
                    </div>
                    <p class="popup_middle_song_name">
                        Chắc ai đó sẽ về
                    </p>
                    <p class="popup_middle_song_artists">
                        Sơn Tùng MT-P
                    </p>
                </div>
            </div>
            <div class="popup_options">
                <p class="popup_options_icon hide-on-mobile hide-on-tablet">
                    <i class="bi bi-arrows-angle-expand"></i>
                </p>
                <p class="popup_options_icon hide-on-mobile hide-on-tablet">
                    <i class="bi bi-gear"></i>
                </p>
                <p class="popup_options_icon popup_down_btn">
                    <i class="bi bi-chevron-down"></i>
                </p>
            </div>
            <div class="music_bar popup_musicbar">
                <MusicbarInfo />
                <MusicbarCustom />
                <MusicbarTools />
            </div>
        </div>
    </div>
  );
};

export default Popup;
