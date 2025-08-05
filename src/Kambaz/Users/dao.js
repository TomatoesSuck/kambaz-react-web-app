import db from "../Database/index.js";
import { v4 as uuidv4 } from "uuid";  // 用于生成唯一 ID

let { users } = db;  // 从数据库加载用户数组

// 创建用户
export const createUser = (user) => {
  const newUser = { ...user, _id: uuidv4() };
  users = [...users, newUser];
  return newUser;
};

// 查找所有用户
export const findAllUsers = () => users;

// 通过 ID 查找
export const findUserById = (userId) =>
  users.find((user) => user._id === userId);

// 通过用户名查找
export const findUserByUsername = (username) =>
  users.find((user) => user.username === username);

// 通过用户名和密码查找（用于登录）
export const findUserByCredentials = (username, password) =>
  users.find((user) => user.username === username && user.password === password);

// 更新用户
export const updateUser = (user) =>
  users = users.map((u) => (u._id === user._id ? user : u));

// 删除用户
export const deleteUser = (userId) =>
  users = users.filter((u) => u._id !== userId);