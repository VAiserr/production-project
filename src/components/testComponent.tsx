import React, {useState} from 'react';
import styles from './style.module.scss'

export const TestComponent = () => {
    const [counter, setCounter] = useState<number>(0);


    return (
        <div className={styles.div}>
            {`count is ${counter}`}
            <br/>
            <button className={styles.button} onClick={() => setCounter(prev => prev + 1 )}>plus one</button>
        </div>
    );
};