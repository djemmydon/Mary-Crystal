import React from 'react'
import {CommentId} from '../Component/CommentId'
import styles from '../styles/comment.module.css'
import "swiper/css";
import "swiper/css/zoom"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/autoplay"
import { Swiper, SwiperSlide } from "swiper/react";




// import Swiper core and required modules
import SwiperCore, {
    Zoom, Navigation, Pagination,Autoplay
} from 'swiper';

// install Swiper modules
SwiperCore.use([Zoom, Navigation, Pagination]);




function Comment() {
    return (
        
            <div className={styles.www}>
            <h1 className='text-center'>Trending</h1>
                        {/* className={styles.whatWeDo} */}
            <Swiper style={{ '--swiper-navigation-color': '#fff', '--swiper-pagination-color': '#fff' }} zoom={true} navigation={false} pagination={false} className="mySwiper"  autoplay={true}>
           
                 
                {CommentId.map(commen => {
                    const { name, comment, image } = commen;
                    return (

              
                        <SwiperSlide key={commen.id}>

                       
                        <div className={`${styles.what}`}>

                                
                                 
                                       <img src={image} alt="" />
                                    <h4>{name}</h4>
                                    <p>{comment}</p>
                        
 </div>
</SwiperSlide> 

                    )
                })}
 
            </Swiper>
            </div>
           
        
    )
}

export default Comment
