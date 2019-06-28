import axios from "axios";

interface ToDo {
  id: number;
  title: string;
  completed: boolean;
}

axios.get("https://jsonplaceholder.typicode.com/todos/1").then(res => {
  const todo = res.data as ToDo; // now our typo ex _id or Id are pointed

  const { id, title, completed } = todo;
  logToDo(id, title, completed);
});

function logToDo(id: number, title: string, completed: boolean) {
  console.log(`
    The id is: ${id}
    The title is: ${title}
    Is it finished? ${completed}
    `);
}
