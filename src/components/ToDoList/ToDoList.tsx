import React, { useState, useEffect } from 'react';
import Card from '../Card/Card';
import todoList from '../../db/todo-list.json'
import styles from './ToDoList.module.css';

const ToDoList: React.FC = () => {
    const [data, setData] = useState<any[]>([]);

    useEffect(() => {
        setData(todoList.todo);
    }, []);

    return (
        <>
            <ul className={styles.list}>
                {data.map((item: any) => (
                    <Card key={item.id} id={item.id} title={item.title} description={item.description} />
                ))}
            </ul>
        </>
    );
};

export default ToDoList;
