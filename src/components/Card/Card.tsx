import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { TiDelete } from "react-icons/ti";
import styles from './Card.module.css';
import {removedToDo} from '../../redux/todos/slice'; 

interface CardProps {
    id: string;
    title: string;
    description: string;
}

const Card: React.FC<CardProps> = ({ id, title, description }) => {
    const dispatch = useDispatch();

    const [isHovered, setIsHovered] = useState(false);

    const handleDeleteTodo = (): void => {
        dispatch(removedToDo(id));
    };

    return (
        <li 
            className={styles.card} 
            key={id} 
            onMouseEnter={() => setIsHovered(true)} 
            onMouseLeave={() => setIsHovered(false)}
        >
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.description}>{description}</p>
            {isHovered && (
                <button className={styles.button} type='button'
                    onClick={handleDeleteTodo}
                >
                    <TiDelete size={24}/>
                </button>
            )}
        </li>
    );
};

export default Card;
