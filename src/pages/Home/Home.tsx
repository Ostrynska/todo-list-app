import React from 'react';
import styles from './Home.module.css';
import Tabs from '../../components/Tabs/Tabs';
import ToDoList from '../../components/ToDoList/ToDoList';

const Home: React.FC = () => {
 return (
  <>
   <h1 style={{ display: 'none' }}>To-do List App</h1>
   <section className={styles.home}>
             <Tabs activeTab="all" />
             <ToDoList/>
   </section>
  </>
 );
};

export default Home;
