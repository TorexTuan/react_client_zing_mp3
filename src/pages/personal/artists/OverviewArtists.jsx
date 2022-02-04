import { useRef } from 'react';
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import ArtistsContent from './ArtistsContent';

import artists from "../../../fake-data/artists";

const OverviewArtists = () => {

    const nextRef = useRef(null)
    const prevRef = useRef(null)
   
  return (
    <div className="user_overview_artists row">
        <div className="user_overview_header col l-12">
            <p className="user_overview_header_title">
            Nghệ Sĩ <i className="bi bi-chevron-right user_overview_tittle_icon"></i>
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
                //        swiper.translateTo(-1400, 600)
                //     }

                //     swiper.params.navigation.prevEl.onclick = function() {
                //         swiper.translateTo(0, 600)
                //     }
                // }}
                className="user_overview_content_posts"
            >
                {
                    artists.map((artist, index) => (
                        <SwiperSlide key={index} className="user_overview_content_post margin-bot-30 col col-15 l-2-4 m-3 c-6">
                            <ArtistsContent artist={artist} />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    </div>
  );
};

export default OverviewArtists;
