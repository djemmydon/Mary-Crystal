import { useState } from 'react'
import { motion } from "framer-motion";
import styles from '../styles/head.module.css'
import Link  from 'next/link'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade"
import "swiper/css/navigation"
import "swiper/css/pagination"




// import Swiper core and required modules
import SwiperCore, {
    EffectFade, Navigation, Pagination
} from 'swiper';

// install Swiper modules
SwiperCore.use([EffectFade, Navigation, Pagination]);





function HeadComp() {
  
    return (
        <>
        <div className={`${styles.header} `} id='head'>
         

        <div className={`${styles.Hero}`}>


   
                 
                    <motion.div className={`${styles.Text}` } 
                    initial={{opacity:0}}
                    animate={{opacity:1}}
                    transition={{duration:0.5}}
                    >
                     <h1>ARRIVAL OF NEW SALES</h1>
                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum ea dicta nostrum, adipisci earum blanditiis.</p>
                    <button>Shop Now</button>
     
        </motion.div>
   </div>


           </div>
          
        </>

    )
}

export default HeadComp
