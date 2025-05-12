import axios from "axios";

interface Post {
    id: number;
    title: string;
    body: string;
}

const fetchPosts = async ():Promise<Post[]> => {
  const response = await axios.get<Post[]>("https://jsonplaceholder.typicode.com/posts");
  return response.data;
};

const getUsers = async () => {
    const users = await fetchPosts();
    console.log(users)
};
