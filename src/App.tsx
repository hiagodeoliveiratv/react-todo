import { useState, KeyboardEvent } from 'react';
import styles from './App.module.css';
import { Task } from './types/Task';
import { TaskItem } from './components/TaskItem';
import { AddTask } from './components/AddTask';

const App = ()=>{

    const [ taskList, setTaskList ] = useState<Task[]>([
        {id: 0, name: 'Comprar pão na padaria', done:false},
        {id: 1, name: 'Comprar bolo na padaria', done:true},
    ]);



    return (
        <div className={styles.container}>

            <div className={styles.area}>

                <header >
                    <h1 className={styles.headerTitle}>Lista de Tarefas</h1>
                </header>

                <AddTask
                    taskList={taskList} 
                    setTaskList={setTaskList}               
                />

                {taskList.map(task =>(
                    <TaskItem
                        key={task.id}
                        task={task}
                    />
                ))}

            </div>
        </div>
    );
  
}

export default App;