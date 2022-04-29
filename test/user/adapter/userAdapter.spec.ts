import { UserAdapter, UserMapperService } from "../../../src/adapter";
import IUserDTO from "../../../src/adapter/DTO/IUserDTO";
import MockUserRepository from "./mocks/mockUserRepository";

let userAdapter: UserAdapter;

beforeEach(() => {
  userAdapter = new UserAdapter(new MockUserRepository(), new UserMapperService());
});

test("Should return array of IUserDTO", async () => {
  const users: IUserDTO[] = await userAdapter.find();

  expect(users)
  .toEqual([
    {
      id: "1",
      name: "John Doe",
      email: "",
      status: false,
    }
  ]);
});