
const MvContent = (props) => {

    const { mv } = props

  return (
      <>
        <div className="user_overview_post_image_wrapper">
            <img src={mv.thumnail} alt="" className="user_overview_post_image"/>
            <div className="user_post_icon_wrapper">
                <i className="bi bi-x-lg mv-x-icon"></i>
                <div className="user_post_play_fill_icon_circle">
                    <i className="bi bi-play-fill user_post_play_fill_icon"></i>  
                </div>
                <p className="user_mv_time">{mv.time}</p>
            </div>
        </div>
        <div className="user_overview_post_mv_info">
            <div className="mv_info_des_wrapper">
                <p className="user_overview_post_mv_des">
                    <span className="limit-text-2-line">{mv.name}</span> 
                </p>
                <p className="user_overview_post_artist">
                    <span>{mv.artists}</span>
                </p>
            </div>
        </div>
      </>
  );
};

export default MvContent;
