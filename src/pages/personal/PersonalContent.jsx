import React from 'react';
import { useState } from 'react';

import Header from '../../components/Header';
import Overview from './Overview';
import Songs from './songs/Songs';
import PlayList from './playlist/Playlist'
import Mv from './mv/Mv';
import Artists from './artists/Artists';
import UploadMusic from '../UploadMusic';

const personalOptions = [
    {
        title: 'TỔNG QUAN',
        hide: [],
    },
    {
        title: 'BÀI HÁT',
        hide: [],
    },
    {
        title: 'PLAYLIST',
        hide: [],
    },
    {
        title: 'MV',
        hide: [],
    },
    {
        title: 'NGHỆ SỸ',
        hide: ['mobile']
    },
    {
        title: 'TẢI LÊN',
        hide: ['mobile', 'tablet']
    },
] 


const PersonalContent = () => {

    const [optionActive, setOptionActive] = useState(0)

  return (
    <div className="container">
        <Header />
        <div className="content">
            {/* user  */}
            <div className="content_user">
                {/* info  */}
                <div className="user_info">
                    <img src="./images/image-slide/amee.jpg" alt="" className="user_info_image" />
                    <p className="user_info_name">Đặng Quốc Tuấn</p>
                    <div className="user_vouchers hide-on-mobile">
                        <span className="user_vouchers_buying">MUA VIP NGAY</span>
                        <span className="user_vouchers_entering hide-on-tablet">NHẬP CODE VIP</span>
                        <i className="bi bi-three-dots user_options_icon"></i>
                    </div>
                </div>
                {/* nav  */}
                <div className="user_nav">
                    {/* <!--nav list  */}
                    <div className="user_nav_list_wrapper">
                        <ul className="user_nav_list">
                            {
                                personalOptions.map((personalOption, index) => (
                                    <li 
                                        key={index} 
                                        className={`user_nav_item${optionActive === index ? ' active' : ''}${personalOption.hide.includes('mobile') ? ' hide-on-mobile' : ''}${personalOption.hide.includes('tablet') ? ' hide-on-tablet' : ''}`}
                                        onClick={() => setOptionActive(index)}
                                    >{personalOption.title}</li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className='user_nav_item_wrapper grid'>
                        {
                            optionActive === 0 ? <Overview /> : null ||
                            optionActive === 1 ? <Songs /> : null ||
                            optionActive === 2 ? <PlayList /> : null ||
                            optionActive === 3 ? <Mv /> : null ||
                            optionActive === 4 ? <Artists /> : null ||
                            optionActive === 5 ? <UploadMusic /> : null
                        }
                    </div>
            </div>
        </div>
        </div>
    </div>
  );
};

export default PersonalContent;
