import React from 'react'
import styles from '../styles/Recent.module.css'
import {RecentId} from '../Component/RecentId'



function Recent() {
    return (
       <>
       <div className={`${styles.contain} container `} id='recent'>
           <h1 className='text-center'>PRODUCTS</h1>


                <div className={styles.container}>
   


                {
                        RecentId.map(recent => {
                            const { price, image, pbefore, name} =recent;
                        return(
                        
                            <div key={recent.id}>
                            <img src={image} alt="" />
                                <div className={`${styles.text}`}>
                                    <h3>{name}</h3>
                                    <h4>{price}  <span>{pbefore}</span></h4>
                                </div>
                            </div>
                            
                        )
                    })
                }
                  
        
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
