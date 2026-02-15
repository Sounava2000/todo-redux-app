import { useState } from "react";

import "./App.css";

import { TodoForm } from "./Component/TodoForm";
import { Filter } from "lucide-react";
import { FilterTabs } from "./Component/FilterTabs";
import { Todo } from "./Component/Todo.jsx";
import { useSelector } from "react-redux";

function App() {
  const todo = useSelector((state) =>  state.todo.value);
  const filter = useSelector((state) =>  state.todo.filter);
 
  const filteredTodo =  todo.filter((item,index)=> {
    if (filter==="Active") {
       return item. isComplete ===false
    }
      if (filter==="Completed") {
       return item. isComplete ===true
    }
    return item
  })

  return (
    <>
      <div className="w-full min-h-screen flex flex-col items-center bg-white p-10">
        <TodoForm></TodoForm>
        <FilterTabs filter={filter}></FilterTabs>
        <Todo todo={filteredTodo}></Todo>
      </div>
    </>
  );
}

export default App;
