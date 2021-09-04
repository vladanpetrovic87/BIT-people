const endPoint = "https://randomuser.me/api/?results=15";

export const getUsers = () => {
  return fetch(endPoint)
    .then((result) => result.json())
    .then((users) => users.results);
};