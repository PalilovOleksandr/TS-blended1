import axios from 'axios';

interface Post {
  id: number;
  title: string;
  body: string;
}
interface User {
  body: string;
  id: number;
  title: string;
}
const fetchPosts = async (): Promise<Post[]> => {
  const response = await axios.get<Post[]>(
    'https://jsonplaceholder.typicode.com/posts'
  );
  return response.data;
};

const users = await fetchPosts();

function logThreePosts(users: User[]): User[] {
  return users.filter(({ body, title, id }: User) =>
    id < 4 ? { body, title } : ''
  );
}
console.log(logThreePosts(users));
