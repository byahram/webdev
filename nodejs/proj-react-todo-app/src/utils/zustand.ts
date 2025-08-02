import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface IUser {
  _id: string;
  name: string;
  email: string;
}

export interface ITask {
  _id: string;
  task: string;
  isComplete: boolean;
  user?: IUser;
}

export interface TodoAppStore {
  users: IUser[];
  currentUser: IUser | null;
  tasks: ITask[];

  // User
  setCurrentUser: (user: IUser | null) => void;
  logoutUser: () => void;

  // Task
  setTasks: (tasks: ITask[]) => void;
  addTask: (task: ITask) => void;
  deleteTask: (id: string) => void;
  toggleTask: (id: string) => void;
}

export const useTodoAppStore = create<TodoAppStore>()(
  persist(
    (set) => ({
      users: [],
      tasks: [],
      currentUser: null,

      // User
      setCurrentUser: (user) => set({ currentUser: user }),
      logoutUser: () => {
        sessionStorage.removeItem("token");
        set({ currentUser: null });
      },

      // Task
      setTasks: (tasks) => set({ tasks }),
      addTask: (task) =>
        set((state) => ({
          tasks: [...state.tasks, task],
        })),
      deleteTask: (_id) =>
        set((state) => ({
          tasks: state.tasks.filter((task) => task._id !== _id),
        })),
      toggleTask: (_id) =>
        set((state) => ({
          tasks: state.tasks.map((task) =>
            task._id === _id ? { ...task, isComplete: !task.isComplete } : task
          ),
        })),
    }),
    {
      name: "react-todoapp",
    }
  )
);
