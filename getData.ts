const COMMENTS_URL = "https://jsonplaceholder.typicode.com/comments";

interface IComments {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

const getData = async <T>(url: string): Promise<T> => {
  return await fetch(url).then((data) => data.json());
};

getData<IComments>(COMMENTS_URL).then((data) => {
  console.log(`ID: ${data.id}, Email: ${data.email}`);
});
