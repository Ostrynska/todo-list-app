import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { selectRemovedList } from '../../redux/todos/selectors'; 
import { deleteFromRemoved } from '../../redux/todos/slice';

import Card from "../Card/Card";
import styles from "./Completed.module.css";


const CompletedList: React.FC = () =>
{
    const dispatch = useDispatch();
    const removedList = useSelector(selectRemovedList);

    const handleDeleteCompleted = (id: string): void =>
    {
        alert('This action is irreversible')
        dispatch(deleteFromRemoved(id));
    };

    return (
        <>{removedList.length > 0 ? (<ul className={styles.list}>
            {removedList.map((item: any) => (
                <Card
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    description={item.description}
                    onDelete={(id: string) => handleDeleteCompleted(id)}
                />
            ))}
        </ul>) : (<div className={styles.notification}><p>You haven't any completed tasks</p><p>Please go back to the All tab and mark the completed tasks</p></div>)}</>
        
    );
};

export default CompletedList;