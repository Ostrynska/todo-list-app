import React, { ReactNode } from 'react';

import styles from './Container.module.css'

interface ContainerProps {
  children: ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return <main className={styles.wrapp}>{children}</main>;
};

export default Container;
