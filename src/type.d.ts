interface ITodo{
  id : number;
  title:string;
  description:string;
  status:bool;
  createdAt?:string;
  updatedAt?:string; 
}

interface TodoProps {
  todo:ITodo;
}

type ApiDataType = {
  message:string;
  todos: ITodo[];
  todo?: ITodo;
}

