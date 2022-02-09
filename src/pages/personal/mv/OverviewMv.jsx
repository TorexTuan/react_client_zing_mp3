import { useRef } from 'react';
import { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import mvs from '../../../fake-data/mvs'
import MvContent from './MvContent';

const OverviewMv = () => {

    const nextRef = useRef(null)
    const prevRef = useRef(null)

  return (
    <div className="user_overview_mv row">
        <div className="user_overview_header col l-12">
            <p className="user_overview_header_title">
                MV <i className="bi bi-chevron-right user_overview_tittle_icon"></i>
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
        <div className="user_overview_content swiper mv-swiper">
            <Swiper
                modules={[Navigation]}
                slidesPerView={3}
                onInit={(swiper) => {
                    swiper.params.navigation.nextEl = nextRef.current;
                    swiper.params.navigation.prevEl = prevRef.current;
                    swiper.params.navigation.nextEl.classList.add('swiper-next-btn');
                    swiper.params.navigation.prevEl.classList.add('swiper-prev-btn');
                    swiper.navigation.init();
                    swiper.navigation.update();
                }}
                // onSetTranslate={(swiper) => {
                //     let initTrans = 0
                //     swiper.params.navigation.nextEl.onclick = function() {
                //         initTrans = initTrans - 1040
                //        swiper.translateTo(initTrans, 600)
                //     }
                //     swiper.params.navigation.prevEl.onclick = function() {
                //         initTrans = initTrans + 1040
                //         swiper.translateTo(initTrans, 600)
                //     }
                // }}
                className="user_overview_content_posts"
            >
                {
                    mvs.map((mv, index) => (
                        <SwiperSlide key={index} className="user_overview_content_post col col-15 l-4 m-6 c-12">
                            <MvContent mv={mv} />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    </div>
  );
};

export default OverviewMv;
