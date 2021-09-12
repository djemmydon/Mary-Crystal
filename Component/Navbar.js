import React, {useState} from 'react'
import styles from '../styles/nav.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faBars, faTimes,faWhatsapp } from '@fortawesome/free-solid-svg-icons'
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } 
from 'react-scroll'
import Recent from './Recent';

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
                 <li>   <Link
                  activeClass="active"
                  to="head" 
                  smooth={true}
                   offset={50}
                    duration={500}
                        onClick={slideBar}
                     >
                        Home 
                    </Link>
                    </li>
                    <li>   <Link
                        activeClass="active"
                        to="select"
                        smooth={true}
                        offset={50}
                        duration={500}
                        onClick={slideBar}
                    >
                       Selction
                    </Link>
                    </li>        <li>   <Link
                        activeClass="active"
                        to="recent"
                        smooth={true}
                        offset={50}
                        duration={500}
                        onClick={slideBar}
                    >
                         Recents
                    </Link>
                    </li>        <li>   <Link
                        activeClass="active"
                        to="emmy"
                        smooth={true}
                        offset={50}
                        duration={500}
                        onClick={slideBar}
                    >
                        Contact
                    </Link>
                    </li>        <li>   <Link
                        activeClass="active"
                        to="emmy"
                        smooth={true}
                        offset={50}
                        duration={500}
                        onClick={slideBar}
                    >
                         About
                    </Link>
                    </li>
                </ul>
       </div>
          
        </div>
    )
}

export default Navbar
