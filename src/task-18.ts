import axios from "axios";

interface User {
    id: number;
    name: string;
    email: string;
    phone: string;
}

const fetchUsers = async (): Promise<User[]> => {
  const response = await axios.get<User[]>("https://jsonplaceholder.typicode.com/users");
  return response.data;
};

const getUsers = async ():Promise<void> => {
  const users = await fetchUsers();
  console.log(users);
};

getUsers();