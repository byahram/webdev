export interface Task {
  _id: string;
  task: string;
  isComplete: boolean;
  user?: User;
}

export interface User {
  _id: string;
  name: string;
  email: string;
}

export interface UserProps {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
}
