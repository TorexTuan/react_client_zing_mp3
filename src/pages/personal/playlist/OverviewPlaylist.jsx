import { useRef } from 'react';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import playlists from "../../../fake-data/playlists";

import PlaylistContent from './PlaylistContent';

const OverviewPlayList = () => {

    const nextRef = useRef(null)
    const prevRef = useRef(null)

  return (
    <div className="user_overview_playlist row">
        <div className="user_overview_header col l-12">
            <p className="user_overview_header_title">
                PLAYLIST <i className="bi bi-chevron-right user_overview_tittle_icon"></i>
            </p>
            <div className="user_overview_header_custom swiper-btn-wrapper hide-on-tablet hide-on-mobile">
                <div ref={prevRef}>
                    <i className="bi bi-chevron-left"></i>
                </div>
                <div ref={nextRef}>
                    <i className="bi bi-chevron-right"></i>
                </div>
            </div>
        </div>
        <div className="user_overview_content">
            <Swiper 
                modules={[Navigation]}
                slidesPerView={5}
                onInit={(swiper) => {
                    swiper.params.navigation.nextEl = nextRef.current;
                    swiper.params.navigation.prevEl = prevRef.current;
                    swiper.params.navigation.nextEl.classList.add('swiper-next-btn');
                    swiper.params.navigation.prevEl.classList.add('swiper-prev-btn');
                    swiper.navigation.init();
                    swiper.navigation.update();
                }}
                // onSetTranslate={(swiper) => {
                //     swiper.params.navigation.nextEl.onclick = function() {
                //        swiper.translateTo(-1040, 600)
                //     }

                //     swiper.params.navigation.prevEl.onclick = function() {
                //         swiper.translateTo(0, 600)
                //     }
                // }}
                className="user_overview_content_posts"
            >
                <SwiperSlide className="user_overview_content_post col col-15 l-2-4 m-3 c-4">
                    <div className="user_overview_newplay_wrapper">
                        <i className="bi bi-plus-lg user_overview_plus_icon"></i>
                        <p className="user_overview_new_playlist">Tạo playlist mới</p>
                    </div>
                </SwiperSlide>
                {
                    playlists.map((playlist, index) => (
                        <SwiperSlide key={index} className="user_overview_content_post col col-15 l-2-4 m-3 c-4">
                           <PlaylistContent playlist={playlist} />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    </div>
  );
};

export default OverviewPlayList;
