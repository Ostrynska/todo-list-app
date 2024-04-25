import React from 'react';
import { useSelector } from 'react-redux';
import { selectTodoList } from '../../redux/todos/selectors';

import Card from '../Card/Card';

import styles from './ToDoList.module.css';

const ToDoList: React.FC = () => {
    const todoList = useSelector(selectTodoList);

return (
    <>
        {todoList.length > 0 ? (
            <ul className={styles.list}>
                {todoList.map((item: any) => (
                    <Card key={item.id} id={item.id} title={item.title} description={item.description} />
                ))}
            </ul>
        ) : (
            <div className={styles.notification}><p className={styles.notificationText}>Your 🖇️To-Do List is empty now</p><p className={styles.notificationText}>Please wait for our new update and add your new important tasks</p></div>
        )}
    </>
);
};

export default ToDoList;
