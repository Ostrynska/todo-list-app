import React, { useState } from 'react';

import { TiDelete } from "react-icons/ti";

import styles from './Card.module.css';

interface CardProps {
    id: string;
    title: string;
    description: string;
    onDelete: (id: string) => void;
}

const Card: React.FC<CardProps> = ({ id, title, description, onDelete }) => {

    const [isHovered, setIsHovered] = useState(false);

    return (
        <li
            className={styles.card}
            key={id}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <h2 className={styles.title}>🖇️ {title}</h2>
            <p className={styles.description}>{description}</p>
            {isHovered && (
                <button className={styles.button} type='button' onClick={() => onDelete(id)}>
                    <TiDelete size={24}/>
                </button>
            )}
        </li>
    );
};

export default Card;
