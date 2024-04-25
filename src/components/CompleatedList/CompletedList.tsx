import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { selectRemovedList } from '../../redux/todos/selectors'; 
import { deleteFromRemoved } from '../../redux/todos/slice';

import Card from "../Card/Card";
import styles from "../ToDoList/ToDoList.module.css";


const CompletedList: React.FC = () =>
{
    const dispatch = useDispatch();
    const removedList = useSelector(selectRemovedList);

    const handleDeleteCompleted = (id: string): void => {
        dispatch(deleteFromRemoved(id));
    };

    return (
        <ul className={styles.list}>
            {removedList.map((item: any) => (
                <Card 
                    key={item.id} 
                    id={item.id} 
                    title={item.title} 
                    description={item.description} 
                    onDelete={(id: string) => handleDeleteCompleted(id)}
                />
            ))}
        </ul>
    );
};

export default CompletedList;