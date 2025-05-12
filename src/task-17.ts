interface User {
    id: number;
    name: string;
    email: string;
    phone: string;
}
const fetchUsers = async (): Promise<User[]> => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json() as User[];
    return data;
  };
  
  fetchUsers().then((users) => console.log(users));
