
import mvs from "../../../fake-data/mvs";
import MvContent from "./MvContent";

const Mv = () => {
  return (
    <div className="user_overview_mv row">
        <div className="user_overview_header col l-12">
            <p className="user_overview_header_title">MV</p>
        </div>
        <div className="user_overview_content swiper mv-swiper">
            <ul className="user_overview_content_posts" >
                {
                    mvs.map((mv, index) => (
                        <li key={index} className="user_overview_content_post margin-bot-20 col col-15 l-4 m-6 c-12">
                            <MvContent mv={mv} />
                        </li>
                    ))
                }
            </ul>
        </div>
    </div>
  );
};

export default Mv;
