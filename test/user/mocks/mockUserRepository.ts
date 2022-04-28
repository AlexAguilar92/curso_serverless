import { IUserRepository, User } from "../../../../src/repository";

export default class MockUserRepository implements IUserRepository {
  private users: User[] = [
    {
      id: "1",
      name: "John Doe",
      email: "",
      password: "",
      status: false,
      todos: [],
    }
  ];
  
  findByName(name: string): Promise<User> {
    console.log(name)
    throw new Error("Method not implemented.");
  }
  findById(id: string): Promise<User> {
    console.log(id)
    throw new Error("Method not implemented.");
  }
  create(t: Partial<User>): Promise<User> {
    console.log(t)
    throw new Error("Method not implemented.");
  }
  update(t: Partial<User>): Promise<User> {
    console.log(t)
    throw new Error("Method not implemented.");
  }
  delete(id: string): Promise<void> {
    console.log(id)
    throw new Error("Method not implemented.");
  }

  public async find(): Promise<User[]> {
    return this.users;
  }
}