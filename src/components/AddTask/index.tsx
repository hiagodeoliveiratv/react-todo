import { useState, KeyboardEvent } from 'react';
import styles from './AddTask.module.css';
import { Task } from '../../types/Task';

type Props = {
   taskList: Task[];
   setTaskList: (tasks: Task[]) => void;
}

export const AddTask = ({ taskList, setTaskList } : Props )=> {

    const [ taskIput, setTaskInput ] = useState('');
    
    const handleKeyUp = (e: KeyboardEvent)  => {

        if(e.key.toLowerCase() === 'enter'){
            
            setTaskList([...taskList, {id: taskList.length, name: taskIput, done: false}]);
            setTaskInput('');
        } 
    }
    
    return (
        <div className={styles.taskAdd}>
            <p>+</p>                    
            <input type="text"
                placeholder="Adicione uma tarefa"
                value={taskIput}
                onKeyUp={handleKeyUp}
                onChange={e=>setTaskInput(e.target.value)}
            />
        </div>
    )
}