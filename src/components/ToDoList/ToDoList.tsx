import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectTodoList } from '../../redux/todos/selectors';

import Card from '../Card/Card';

import styles from './ToDoList.module.css';

const ToDoList: React.FC = () => {
    const todoList = useSelector(selectTodoList);

    console.log(todoList);
    
    return (
        <>
            <ul className={styles.list}>
                {todoList.map((item: any) => (
                    <Card key={item.id} id={item.id} title={item.title} description={item.description} />
                ))}
            </ul>
        </>
    );
};

export default ToDoList;
