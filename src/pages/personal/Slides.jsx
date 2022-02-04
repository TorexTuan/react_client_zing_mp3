import { useEffect, useState } from "react";

const slides = [
    {
        image: './images/song-image/image1.jpg',
    },
    {
        image: './images/song-image/image2.jpg',
    },
    {
        image: './images/song-image/image3.jpg',
    },
    {
        image: './images/song-image/image4.jpg',
    },
    {
        image: './images/song-image/image5.jpg',
    },
    {
        image: './images/song-image/image6.jpg',
    },
    {
        image: './images/song-image/image7.jpg',
    },
    {
        image: './images/song-image/image8.jpg',
    },
]

const Slides = () => {

    const [slideAnimation, setSlideAnimation] = useState({
        first: 1,
        second: 2,
        third: 3
    })

    useEffect(() => {
        const setTimeOut = setTimeout(() => {
            setSlideAnimation(prevSlides => {
                const currentSlides = {
                    first: prevSlides.first === slides.length - 1 ? prevSlides.first = 0 : prevSlides.first++,
                    second: prevSlides.second === slides.length - 1 ? prevSlides.second = 0 : prevSlides.second++,
                    third: prevSlides.third === slides.length - 1 ? prevSlides.third = 0 : prevSlides.third++
                }
                return currentSlides
            })
        }, 2500)
        
        return () => {
            clearTimeout(setTimeOut)
        }

    }, [slideAnimation])
    
    return (
        <div className="user_overview_content_slides hide-on-mobile">
            {
                slides.map((slide, index) => (
                    <div key={index} 
                        className={`user_overview_slides_wrapper_image ${index === slideAnimation.first ? 'slide-first' : ''} ${index === slideAnimation.second ? 'slide-second' : ''} ${index === slideAnimation.third ? 'slide-third' : ''}`}
                    >
                        <img src={slide.image} alt="" className="user_overview_slides_image" />
                    </div>
                ))
            }
        </div>
    );
};

export default Slides;
