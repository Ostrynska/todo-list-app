import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectTodoList } from '../../redux/todos/selectors';
import { removedToDo } from '../../redux/todos/slice';

import Card from '../Card/Card';

import styles from './ToDoList.module.css';

const ToDoList: React.FC = () =>
{
     const dispatch = useDispatch();
    const todoList = useSelector(selectTodoList);

    const handleDeleteTodo = (id: string): void => {
        dispatch(removedToDo(id));
    };

return (
    <>
        {todoList.length > 0 ? (
            <ul className={styles.list}>
                {todoList.map((item: any) => (
                    <Card key={item.id} id={item.id} title={item.title} description={item.description} onDelete={(id: string) => handleDeleteTodo(id)}/>
                ))}
            </ul>
        ) : (
            <div className={styles.notification}><p className={styles.notificationText}>Your 🖇️To-Do List is empty now</p><p className={styles.notificationText}>Please wait for our new update and add your new important tasks</p></div>
        )}
    </>
);
};

export default ToDoList;
