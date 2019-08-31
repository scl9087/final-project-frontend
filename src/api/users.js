import request from "./request";

export const getAllUsers = () => request("/api/users");

export const getAllAssignments = () => request("/api/users/assignments");