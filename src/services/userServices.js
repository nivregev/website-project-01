import httpService from "./httpServices";

export function createUser(user) {
  return httpService.post("/user", user);
}

const userService = {
  createUser,
};

export default userService;
