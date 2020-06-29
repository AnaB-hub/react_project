export function addUser(user) {
  return {
    type: "ADD_USER_TO_LOCAL_STORAGE",
    user,
  };
}
