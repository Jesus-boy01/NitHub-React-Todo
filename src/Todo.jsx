import { useState } from "react";

const Todo = () => {

    const [newTask, setNewTask] = useState("");
    const [allTasks, setAllTasks] = useState([]);

    const handleInputChange = (e) => {
        setNewTask(e.target.value);
    }

    const handleAddNewTask = () => {
        if (newTask) {
            setAllTasks([...allTasks, newTask]);
            localStorage.setItem("allTasks", [...allTasks, newTask].join(","));
            setNewTask("");
        }
    }

    // useEffect(() => {
    //     const tasks = localStorage.getItem("allTasks");
    //     if (tasks) {
    //         setAllTasks(tasks.split(","));
    //     }
    // }, [])

    const getTasks = () => {
        const tasks = localStorage.getItem("allTasks");
        if (tasks) {
            setAllTasks(tasks.split(","));
        }
    }

    const finishedStyle = {
        textDecoration: `line-through`
    }

    const handleFinishedTask = (finishedTaskIndex) => {
        const updatedTasks = allTasks.map((task, index) => (
            index === finishedTaskIndex ? (
              <li key={index} style={finishedStyle}>{task}</li>
            ) : (
              <li key={index}>{task}</li>
            )
            ));
        setAllTasks(updatedTasks);
    }

    const handleDelete = (taskIndex) => {
        const updatedTasks = allTasks.filter((task, index) => index !== taskIndex);
        setAllTasks(updatedTasks)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }
    
    return (  
        <>
            <h1 className="header">To-Do <span>App</span></h1>
            <form onSubmit={handleSubmit}>
                <div className="input-field">
                    <div className="user-input">
                        <input type="text" id="add-new-task" placeholder="ADD TODO..." value={newTask}
                        onChange={(e) => handleInputChange(e)}
                        />
                        <button className="add" onClick={handleAddNewTask}>ADD</button>
                        <button className="get-todos" onClick={getTasks}>GET ALL TODOS</button>
                    </div>
                    <ul>
                        {allTasks.map((task, index) => (
                            <>
                                <div className="task-wrapper">
                                    <label>
                                        <li key={index}>{task}</li>
                                    </label>
                                    <div className="action-buttons">
                                        <button className="finished" onClick={() => handleFinishedTask(index)}>FINISHED</button>
                                        <button className="delete" onClick={() => handleDelete(index)}>DELETE</button>
                                    </div>
                                </div>
                            </>
                        ))}
                    </ul>
                </div>
            </form>
        </>
    );
}

export default Todo;