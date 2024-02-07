import styles from './Task.module.css';
import { Task } from '../../types/Task';
import { useState,  ChangeEvent } from 'react';

type Props = {
    task: Task;
}

export const TaskItem = ( {task} : Props) =>{

    const [ isChecked, setIsChecked ] = useState(task.done);

    const handleChecked = (e: ChangeEvent<HTMLInputElement>)=>{
        setIsChecked(e.target.checked);
        task.done = e.target.checked;
    }

    return (
        <div className={styles.task}>
            
            <input
                type="checkbox"
                checked={isChecked}
                onChange={e => handleChecked(e)}
            />
            <p
                style={{ textDecoration: isChecked ? 'line-through' : 'none' }}
            >
                {task.name} - {task.done.toString()}
            </p>

        </div>
    )
}