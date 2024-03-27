import React from 'react'
import styles from './Sidebar.module.scss'
import { IoMdMenu } from "react-icons/io";
import { GoPlus } from "react-icons/go";
import { FiMessageSquare } from "react-icons/fi";
import { IoSettings } from "react-icons/io5";
import { FaRegQuestionCircle } from "react-icons/fa";
import { RxCounterClockwiseClock } from "react-icons/rx";




const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
        <div className={styles.top}>
        <IoMdMenu className={styles.menu} />
        <div className={styles.newChat}>
        <GoPlus className={styles.addChat}/>
        <p>New Chat</p>
        </div>
        <div className={styles.recent}>
            <p className={styles.recentTitle}>Recent</p>
            <div className={styles.recentEntry}>
            <FiMessageSquare className={styles.recentIcon} /> 
            <p className={styles.recentText}>What is React..</p>
            </div>
        </div>
        </div>
        <div className={styles.bottom}>
            <div className={styles.bottomIcon}>
             <FaRegQuestionCircle />
                <p>Help</p>
            </div>
            <div className={styles.bottomIcon}>
            <RxCounterClockwiseClock />

                <p>Activity</p>
            </div>
            <div className={styles.bottomIcon}>
            <IoSettings />
                <p>Settings</p>
            </div>
            
            <div></div>
        </div>
      
    </div>
  )
}

export default Sidebar
