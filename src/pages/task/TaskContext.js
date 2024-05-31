import React, {createContext, useState, useEffect} from "react";

export const TaskContext = createContext();

export const TaskProvider = ({children}) => {
    const [tasks, setTasks] = useState({});

    /**
     * Get data from storage and load to tasks
     */
    useEffect(() => {
        const storedTasks = localStorage.getItem("tasks");
        if (storedTasks) {
            setTasks(JSON.parse(storedTasks));
        }
    }, []);

    /**
     * once tasks is updated, save to storage.
     */
    useEffect(() => {
        if (Object.keys(tasks).length) {
            localStorage.setItem("tasks", JSON.stringify(tasks));
        }
    }, [tasks]);


    /**
     * Add a new task to tasks.
     * @param {Object} newTask 
     */
    const addTask = (newTask) => {
        setTasks((prevTasks) => {
            const updatedTasks = { ...prevTasks, [newTask.id]: newTask};
            return updatedTasks;
        });
    };

    /**
     * Update a task to tasks
     * @param {Number} taskId 
     * @param {Object} updatedTask 
     */
    const updateTask = (taskId, updatedTask) => {
        setTasks((prevTasks) => {
            const updatedList = { ...prevTasks, [taskId]: updatedTask };
            return updatedList;
        });
    };

    /**
     * Returns last task
     * @returns Object
     */
    const getLastRunningTask = () => {
        return tasks[Object.keys(tasks).pop()] || null;
    };

    /**
     * Delete a task from memory.
     * @param {Number} taskId 
     */
    const deleteTask = (taskId) => {
        const newList = { ...tasks };
        delete newList[taskId];
        setTasks(newList);
        localStorage.setItem("tasks", JSON.stringify(newList));
    };

    /**
     * Closes previous task and starts a new task.
     * @param {Number} taskId 
     */
    const jumpStartTask = (taskId) => {
        var lastRunningTask = getLastRunningTask();
        if (lastRunningTask) {
            lastRunningTask.endTime = Date.now();
            updateTask(lastRunningTask.id, lastRunningTask);
        }
        if (tasks) {
            var taskData = tasks[taskId];
            let currentTime = Date.now();
            let task = {
                id: currentTime,
                name: taskData.name,
                startTime: currentTime,
                endTime: null
              };
            addTask(task);
        }
    };

    return (
        <TaskContext.Provider value={{tasks, addTask, updateTask, getLastRunningTask, deleteTask, jumpStartTask}}>
            {children}
        </TaskContext.Provider>
    );
 
};