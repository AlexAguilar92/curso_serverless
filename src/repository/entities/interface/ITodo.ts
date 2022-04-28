import User from "../implementation/User";

export default interface ITodo {
  id: string;

  description: string;

  active: boolean

  user: User;
}