import { useState, useEffect } from "react";
import axios from "axios";

function ToDoList() {
  const [taskText, setTaskText] = useState("");
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://pern-crash.onrender.com/todo/"
        );
        setTasks(response.data);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };
    fetchData();
  }, []);

  const handleClick = async () => {
    alert("clicked");
    console.log(tasks);
    if (!taskText.trim()) return; // Prevent empty tasks

    try {
      const response = await axios.post(
        "https://pern-crash.onrender.com/todo/new",
        {
          text: taskText,
        }
      );
      setTasks([...tasks, response.data]); // Update UI with new task
      setTaskText(""); // Clear input
    } catch (error) {
      console.error("Error adding task:", error);
    }
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center mt-40">
      <h1 className="heading">To Do List</h1>
      <div className="toDoList">
        {tasks.map((task) => (
          <div key={task.id} className="taskItem">
            <p>{task.text}</p>
          </div>
        ))}
      </div>
      <div className="addTaskBox">
        <input
          type="text"
          placeholder="Add Task"
          value={taskText}
          className="taskInput"
          onChange={(e) => setTaskText(e.target.value)}
        />
        <button className="addBtn" onClick={handleClick}>
          + New task
        </button>
      </div>
    </div>
  );
}

export default ToDoList;
