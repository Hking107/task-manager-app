/* List of All tasks */

import React from "react"
import TaskItem from './TaskItem'

const TaskList = () => {
    const tasks = [
        {id: 1, title: 'Learn React', completed: false}, 
        {id: 2, title: 'Go to church', completed: false},
        {id: 3, title: 'Read a Book', completed: false}
    ]

    return (<div>
                {tasks.map(task => (<TaskItem key = {task.id} task = {task} />))}
            </div>)
}

export default TaskList