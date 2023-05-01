import React, { createContext, useState } from "react";
import type { Task } from "../domain/Task";

interface TaskContextValue {
  tasks: Task[];
  addTask: (task: Task) => void;
  updateTask: (updatedTask: Task) => void;
}

const TaskContext = createContext<TaskContextValue | undefined>(undefined);

const TaskProvider = ({ children }: { children: React.ReactNode }) => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (task: Task) => {
    setTasks((prevTasks) => [...prevTasks, task]);
  };

  const updateTask = (updatedTask: Task) => {
    setTasks((prevTasks) => {
      return prevTasks.map((task) =>
        task.id === updatedTask.id ? updatedTask : task
      );
    });
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, updateTask }}>
      {children}
    </TaskContext.Provider>
  );
};

export { TaskContext, TaskProvider };
