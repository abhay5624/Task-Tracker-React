import Header from "./components/Header";
import Task from "./components/Task";
import { useState } from "react";

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Docter Appointment",
      day: "feb 5th at 2:30pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Meeting at school",
      day: "feb 6th at 12:30pm",
      reminder: true,
    },
    {
      id: 3,
      text: "Food shoping",
      day: "feb 5th at 2:30pm",
      reminder: false,
    },
  ]);
  //delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };
  //toggle reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) => 
        task.id === id ? 
        { 
          ...task,
           reminder: !task.reminder
        } 
        : task
      )
    );
  };
  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ? (
        <Task tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "no task"
      )}
    </div>
  );
};
export default App;
