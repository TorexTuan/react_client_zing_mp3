import React from 'react';

const UploadMusic = () => {
  return (
    <div className="user_upload user_display grid">
      <div className="user_overview_mv row">
          <div className="user_overview_header col l-12">
              <p className="user_overview_header_title">
                DANH SÁCH TẢI LÊN
              </p>
          </div>
          <div className="user_upload_content col l-12">
              <img src="./images/image-slide/music-icon.svg" alt="" className="user_upload_music_icon" />
              <p className="user_upload_content_text">
                  Không có bài hát tải lên
              </p>
          </div>
      </div>
  </div>
  );
};

export default UploadMusic;
