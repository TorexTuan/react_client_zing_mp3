
const PlaylistContent = (props) => {

  const { playlist } = props

  return (
    <>
      <div className="user_overview_post_image_wrapper">
          <img src={playlist.image} alt="" className="user_overview_post_image" />
          <div className="user_post_icon_wrapper">
              <i className="bi bi-heart user_post_heart_icon hide-on-tablet hide-on-mobile"></i>
              <div className="user_post_play_fill_icon_circle">
                  <i className="bi bi-play-fill user_post_play_fill_icon"></i>  
              </div>
              <i className="bi bi-three-dots user_post_options_icon hide-on-tablet hide-on-mobile"></i>  
          </div>
      </div>
      <p className="user_overview_post_des limit-text-2-line">{playlist.description}</p>
      <p className="user_overview_post_creator limit-text">{playlist.creator}</p>
    </>
  );
};

export default PlaylistContent;
