import React from "react";
import { Delete } from "./Delete";
import { EditTodo } from "./EditTodo";
import { Done } from "./Done";

export const Todo = ({ todo }) => {
  return (
    <div className="w-full max-w-2xl mt-5 space-y-4">
      {todo.map((item, index) => (
        <div
          key={index}
          className="flex items-center justify-between bg-white border border-gray-200 rounded-2xl p-4 shadow-sm hover:shadow-md transition-all duration-300"
        >
          
          <div className="flex items-center gap-3">
            <Done item = {item} />
            <p className={`text-gray-700 text-base  ${item.isComplete ? "line-through":""}`}>
              {item.task}
            </p>
          </div>

      
          <div className="flex items-center gap-4">
            <EditTodo item = {item} />
            <Delete item = {item} />
          </div>
        </div>
      ))}
    </div>
  );
};
