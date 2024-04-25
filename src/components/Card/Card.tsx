import React, { useState } from 'react';
import { TiDelete } from "react-icons/ti";
import styles from './Card.module.css';

interface CardProps {
    id: string;
    title: string;
    description: string;
}

interface ITodo {
    id: string;
    text: string;
}

const Card: React.FC<CardProps> = ({ id, title, description }) =>
{
    const [isHovered, setIsHovered] = useState(false);
    const [todos, setTodos] = useState<ITodo[]>([]);

    const deleteTodo = (idToDelete: string): void => {
        setTodos(prevTodos => prevTodos.filter(todo => todo.id !== idToDelete));
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
                <button className={styles.button} type='button' onClick={(): void => deleteTodo(id)}>
                    <TiDelete size={20}/>
                </button>
            )}
        </li>
    );
};

export default Card;