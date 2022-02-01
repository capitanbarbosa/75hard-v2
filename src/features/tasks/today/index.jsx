import { useState, useEffect } from "react";
import Task from "./task";

export default function TodaysTasks({ tasks }) {
  const [_tasks, setTasks] = useState(tasks);

  useEffect(() => {
    const json = localStorage.getItem("todaysTasks");

    if (json) setTasks(JSON.parse(json));
  }, []);

  useEffect(() => {
    localStorage.setItem("todaysTasks", JSON.stringify(_tasks));
  }, [_tasks]);

  function updateTask(task) {
    setTasks((prev) =>
      prev.map((_task) => (_task.name === task.name ? task : _task))
    );
  }

  return (
    <div className="mt-16 container mx-auto">
      <div>
        <h1>Todays Tasks</h1>

        {_tasks.map((task) => (
          <Task key={task.name} task={task} updateTask={updateTask} />
        ))}
      </div>
    </div>
  );
}
