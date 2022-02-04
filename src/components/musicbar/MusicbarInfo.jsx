
const MusicbarInfo = () => {
  return (
    <div className="musicbar_info">
        <div className="musicbar_info_disk_note_wrapper">
            <div className="musicbar_info_disk_wrapper">
                <img src="./images/song-image/image1.jpg" alt="" className="musicbar_info_disk"/>
            </div>
            <svg fill="#fff" viewBox="0 0 512 512" className="thumb_note_icon thumb_note_1">
                <path d="M470.38 1.51L150.41 96A32 32 0 0 0 128 126.51v261.41A139 139 0 0 0 96 384c-53 0-96 28.66-96 64s43 64 96 64 96-28.66 96-64V214.32l256-75v184.61a138.4 138.4 0 0 0-32-3.93c-53 0-96 28.66-96 64s43 64 96 64 96-28.65 96-64V32a32 32 0 0 0-41.62-30.49z"></path>
            </svg>
            <svg fill="#fff" viewBox="0 0 384 512" className="thumb_note_icon thumb_note_2">
                <path d="M310.94 1.33l-96.53 28.51A32 32 0 0 0 192 60.34V360a148.76 148.76 0 0 0-48-8c-61.86 0-112 35.82-112 80s50.14 80 112 80 112-35.82 112-80V148.15l73-21.39a32 32 0 0 0 23-30.71V32a32 32 0 0 0-41.06-30.67z"></path>
            </svg>
            <svg fill="#fff" viewBox="0 0 384 512" className="thumb_note_icon thumb_note_3">
                <path d="M310.94 1.33l-96.53 28.51A32 32 0 0 0 192 60.34V360a148.76 148.76 0 0 0-48-8c-61.86 0-112 35.82-112 80s50.14 80 112 80 112-35.82 112-80V148.15l73-21.39a32 32 0 0 0 23-30.71V32a32 32 0 0 0-41.06-30.67z"></path>
            </svg>
            <svg fill="#fff" viewBox="0 0 512 512" className="thumb_note_icon thumb_note_4">
                <path d="M470.38 1.51L150.41 96A32 32 0 0 0 128 126.51v261.41A139 139 0 0 0 96 384c-53 0-96 28.66-96 64s43 64 96 64 96-28.66 96-64V214.32l256-75v184.61a138.4 138.4 0 0 0-32-3.93c-53 0-96 28.66-96 64s43 64 96 64 96-28.65 96-64V32a32 32 0 0 0-41.62-30.49z"></path>
            </svg>
        </div>
        <div className="musicbar_info_wrapper">
            <p className="musicbar_info_name limit-text">Chắc ai đó sẽ về</p>
            <div className="musicbar_info_singers limit-text">Sơn Tùng MT-P</div>
        </div>
        <div className="musicbar_info_icon_wrapper hide-on-tablet hide-on-mobile">
            <p className="musicbar_info_icon">
                <i className="bi bi-heart"></i>
            </p>
            <p className="musicbar_info_icon">
                <i className="bi bi-three-dots"></i>
            </p>
        </div>
    </div>
  );
};

export default MusicbarInfo;
