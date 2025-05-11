interface User {
    name: string;
    age: number;
}


const users: User[] = [
    { name: "Alice", age: 30 },
    { name: "Bob", age: 25 },
  ];


const moly = {
    name: 'Moly',
    age: 33,
}

users.push(moly);