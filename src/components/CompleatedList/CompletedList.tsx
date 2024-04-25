import React from 'react';

import { useSelector } from 'react-redux';
import { selectRemovedList } from '../../redux/todos/selectors'; 

import Card from "../Card/Card";
import styles from "../ToDoList/ToDoList.module.css";
const CompletedList: React.FC = () =>
{
    const removedList = useSelector(selectRemovedList);
    return (
            <ul className={styles.list}>
                {removedList.map((item: any) => (
                    <Card key={item.id} id={item.id} title={item.title} description={item.description} />
                ))}
            </ul>
    );
};

export default CompletedList;
