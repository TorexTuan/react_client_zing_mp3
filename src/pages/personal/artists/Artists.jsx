
import artists from "../../../fake-data/artists";
import ArtistsContent from "./ArtistsContent";

const Artists = () => {
  return (
    <div className="user_overview_artists row">
        <div className="user_overview_header col l-12">
            <p className="user_overview_header_title">Nghệ Sĩ</p>
        </div>
        <div className="user_overview_content">
            <ul className="user_overview_content_posts">
                {
                    artists.map((artist, index) => (
                        <li key={index} className="user_overview_content_post margin-bot-30 col col-15 l-2-4 m-3 c-6">
                            <ArtistsContent artist={artist} />
                        </li>
                    ))
                }
            </ul>
        </div>
    </div>
  );
};

export default Artists;
