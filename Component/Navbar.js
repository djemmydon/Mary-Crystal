import React, {useState} from 'react'
import styles from '../styles/nav.module.css'
import Link from 'next/link'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
function Navbar() {

    const [sidebar, setSidebar] = useState(false)

    const slideBar = () => setSidebar(!sidebar)
    return (
        <div className={styles.nav}>
            <div className={styles.Logo}>
                <img src="/logo.png" alt="" />
            </div>
            <div className="navbar">

     
                <FontAwesomeIcon icon={faBars} className='wel' onClick={slideBar}/>
            </div>
            <div className={sidebar ? 'nav-menu active' : 'nav-menu'} >
                <FontAwesomeIcon icon={faTimes} className='wel wel2' onClick={slideBar} />
                <ul onClick={slideBar} className={styles.HeadComp}>
                    <li><Link href='/blog'>Home </Link>  </li>
                    <li><Link href='/blog'>Products </Link>  </li>
                    <li>  <Link href='/blog'>Contacts </Link></li>
                    <li>  <Link href='/blog'>About us </Link></li>
                </ul>
       </div>
          
        </div>
    )
}

export default Navbar
