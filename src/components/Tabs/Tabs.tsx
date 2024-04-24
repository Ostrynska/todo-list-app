import React from 'react';
import { RiDashboardFill } from 'react-icons/ri';
import { MdFolderDelete } from "react-icons/md";
import styles from './Tabs.module.css';

interface TabsProps {
    activeTab: 'all' | 'removed';
}

const Tabs: React.FC<TabsProps> = ({ activeTab }) => {
    return (
        <div className={styles.navtabs}>
            <ul className={styles.tabs}>
                <li className={activeTab === 'all' ? styles.active : ''}>
                    <RiDashboardFill size={16}/>
                    <p>All</p>
                </li>
                <li className={activeTab === 'removed' ? styles.active : ''}>
                    <MdFolderDelete size={16}/>
                    <p>Completed</p>
                </li>
            </ul>
            {/* <button className={styles.button}>Add new task</button> */}
        </div>
    );
};

export default Tabs;
