import Head from 'next/head'
import Image from 'next/image'
import HeadComp from '../Component/HeadComp'
import Recent from '../Component/Recent'
import Selection from '../Component/Selection'
import Navbar from '../Component/Navbar'
import MessengerCustomerChat from 'react-messenger-customer-chat';




import { faCode, faHighlighter, f075 } from '@fortawesome/free-regular-svg-icons';


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
        <MessengerCustomerChat
          pageId="<103922494687808>"
          appId="<2063836163770492>"
         />,
      </main>

   
    </div>
  )
}
