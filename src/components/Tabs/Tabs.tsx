import React from 'react';

import { RiDashboardFill } from 'react-icons/ri';
import { MdFolderDelete } from "react-icons/md";

import styles from './Tabs.module.css';

interface TabsProps {
    activeTab: 'all' | 'removed';
    setActiveTab: (tab: 'all' | 'removed') => void;
}

const Tabs: React.FC<TabsProps> = ({ activeTab, setActiveTab }) => {
    return (
        <div className={styles.navtabs}>
            <ul className={styles.tabs}>
                <li className={activeTab === 'all' ? styles.active : ''} onClick={() => setActiveTab('all')}>
                    <RiDashboardFill size={16}/>
                    <p>All</p>
                </li>
                <li className={activeTab === 'removed' ? styles.active : ''} onClick={() => setActiveTab('removed')}>
                    <MdFolderDelete size={16}/>
                    <p>Completed</p>
                </li>
            </ul>
        </div>
    );
};

export default Tabs;
