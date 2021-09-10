import Head from 'next/head'
import Image from 'next/image'
import HeadComp from '../Component/HeadComp'
import Recent from '../Component/Recent'
import Selection from '../Component/Selection'
import Navbar from '../Component/Navbar'
import Comment from '../Component/Comment'
import Contact from '../Component/Contact'
import emailjs from 'emailjs-com'



export default function Home() {
  

  
  return (
    <div>
      <Head>
       <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"></link>
      
      </Head>
    
      <main >
        
        <Navbar />
        
          <HeadComp />
        <Selection />
        <Recent />

        <Comment />
        <Contact />

        
      </main>

   
    </div>
  )
}
