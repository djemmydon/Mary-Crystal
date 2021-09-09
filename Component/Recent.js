import React from 'react'
import styles from '../styles/Recent.module.css'
import {RecentId} from '../Component/RecentId'



function Recent() {
    return (
       <>
       <div className={`${styles.contain} container`}>
           <h1>Recents</h1>
                <div className={styles.container}>
   


                {
                        RecentId.map(recent => {
                            const { price, image, pbefore} =recent;
                        return(
                        
                            <div key={recent.id}>
                            <img src={image} alt="" />
                                <div className={`${styles.text} card-img-top`}>
                                    <h4>{price}<span>{pbefore}</span></h4>
                                </div>
                            </div>
                            
                        )
                    })
                }
                    {/* <div>
                        <img src="/men.jpg" alt="" />

                        <h4>$10,000 <span>$15,400</span></h4>
                    </div>
                    <div>
                        <img src="/men.jpg" alt="" />

                        <div className={`${styles.text} card-img-top`}>
                        <h4>$10,000 <span>$15,400</span></h4>
                    </div>
             </div>


                    <div>
                        <img src="/women.jpg" alt="" />

                        <h4>$10,000 <span>$15,400</span></h4>
                    </div>

                    <div >
                        <img src="/men3.jpg" alt="" />

                        <h4>$10,000 <span>$15,400</span></h4>
                    </div> */}
           </div>

           <div className={`${styles.base} `}>
               <div className={styles.base1}>
            <img src="/xxx.png" alt="" />
               </div>

                    <div className={styles.base2}>
                    <h1>Lorem ipsum dolor sit amet.</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim, mollitia tempora excepturi eaque quo nobis.</p>
                    </div>
           </div>
       </div>
       </>
    )
}

export default Recent
