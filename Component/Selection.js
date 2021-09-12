import React, {useEffect} from 'react'
import Link from 'next/link';
import styles from '../styles/selection.module.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {
    EffectFlip, Pagination, Navigation, Autoplay
} from 'swiper';
import "swiper/css/autoplay"
// Import Swiper styles
import 'swiper/css';
import Recent from './Recent';
import {motion, useAnimation} from 'framer-motion'
import {useInView} from 'react-intersection-observer'



SwiperCore.use([EffectFlip, Pagination, Navigation, Autoplay]);


function Selection() {
    const {ref, inView} =useInView()
    const animation = useAnimation()
 const anim = useAnimation()
    useEffect(()=> {
        if(inView){
            animation.start({
                x:0,
                transition:{duration:1, delay:0.5}
            });
          

        }

          if(!inView){
                animation.start({
                    x:'-100vw'
                })
            };

                   if(inView){
            anim.start({
                x:0,
                transition:{duration:1}
                
            });
          

        }

          if(!inView){
                anim.start({
                    x:'-100vw'
                })
            }
console.log(inView)
    },[inView])
    return (
        <>
            <div ref={ref} className={`${styles.main} container-fluid`} id='select'>
                <h1 className='text-center'>SELECTIONS</h1>

                <div className={`${styles.portfolio} `}>
                    
                    <motion.div  className={`${styles.portfolioItems} `} animate={animation}  >
                     <img src="/women.jpg" alt="" />

                     <Link href='/men' >
                        <button>Men <span>15 items</span></button>
                        </Link>
                        </motion.div>
 
                    <motion.div className={`${styles.portfolioItems} `} animate={anim}  >
                         
  
                      <img src="/women.jpg" alt="" />
                   <Link href='/women'  className={styles.Link}>
                        <button onClick={Recent}>Women <span>15 items</span></button>
                      </Link>
                    </motion.div>
  
                </div>

                    <div className={`${styles.swip} container`}>
                    <h1 className='text-center'>TRENDINGS</h1>

                <Swiper
                className={styles.Swip}
     
                  autoplay={true}
                    spaceBetween={0}
                    slidesPerView={2}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    <SwiperSlide
                    className={styles.Slide}
                    >
                        <img src="/bbb copy.jpg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide> 
                         <img src="/pant1.jpg" alt="" />
                          
                    </SwiperSlide>
                    <SwiperSlide>  <img src="/bbb copy.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide>  <img src="/bbb copy.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide>  <img src="/pant1.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide>  <img src="/pant1.jpg" alt="" /></SwiperSlide>
                  
                </Swiper>
                </div>
      </div>
      
        </>
    )
}

export default Selection
