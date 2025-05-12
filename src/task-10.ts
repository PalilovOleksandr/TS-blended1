const users: string[] = ["alice", "bob", "charlie"];

interface User {
    id: number;
    name: string;
}

function toUserObjects(users:string[]):User[] {
   return users.map((user,index) => ({id: index+1, name: user}));
}


console.log(toUserObjects(users))
