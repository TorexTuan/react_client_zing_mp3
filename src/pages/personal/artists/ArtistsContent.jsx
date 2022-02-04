
const ArtistsContent = (props) => {
  
    const { artist } = props

    return (
      <>
        <div className="user_overview_post_image_wrapper user_overview_artist_image_wrapper">
            <img src={artist.image} alt="" className="user_overview_post_image user_overview_artist_image"/>
            <div className="user_post_icon_wrapper">
                <div className="user_post_play_fill_icon_circle">
                    <i className="bi bi-play-fill user_post_play_fill_icon"></i>  
                </div>
            </div>
        </div>
        <div className="user_overview_post_artist_info">
            <div className="artist_info_des_wrapper">
                <p className="user_overview_artist_name">
                    <span>{artist.name}</span> 
                    <i className="bi bi-star-fill artist_star_icon"></i>
                </p>
                <p className="user_overview_artist_care">
                    <span>{artist.care} quan tâm</span>
                </p>
                <p className="user_overview_artist_cared">
                    <i className="bi bi-check2"></i>
                    <span>ĐÃ QUAN TÂM</span>
                </p>
            </div>
        </div>
      </>
   
  );
};

export default ArtistsContent;
