import React, { useEffect, useState } from "react";
import { CheckCircle, Edit, XCircle } from "lucide-react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

export const TodoForm = () => {
  const dispatch = useDispatch();
  const [myTodo, setMyTodo] = useState({});
  function handelChange(e) {
    const name = e.target.name;
    const value = e.target.value;
const id = Date.now()
    setMyTodo((prev) => {
      const copyCode = { ...prev };

      copyCode[name] = value;
       copyCode.id = id;
       copyCode.isComplete = false;

      return copyCode;
    });
  }

  function handelClick() {
     if (!myTodo.task.trim()) return;
    dispatch(addTodo(myTodo))
    
setMyTodo({task:""})
  }
  return (
    <>
      <h1 className="text-2xl font-semibold mb-6">Todo App(With Redux)</h1>
      <div className="w-full max-w-2xl flex items-center border rounded-xl overflow-hidden shadow-sm">
        <input
          name="task"
          className="flex-1 p-3 outline-none text-gray-700"
          type="text"
          value={myTodo.task||""}
          
          onChange={(e) => handelChange(e)}
          placeholder="Write your task here..."
          onKeyDown={(e)=> {
            if (e.key === "Enter") {
      handelClick();
    } 
          }}
        />
        <button
          onClick={() => handelClick()}
          className="bg-green-600 text-white px-6 py-3 font-medium hover:bg-green-700 transition-all"
        >
          ADD
        </button>
      </div>
    </>
  );
};
