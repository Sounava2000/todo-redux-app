import React from "react";
import { CheckCircle, Edit, XCircle } from "lucide-react";
import { useDispatch } from "react-redux";
import { filterTodo } from "../features/todo/todoSlice";
export const FilterTabs = ({ filter }) => {
  const dispatch = useDispatch();
  function handelClick(params) {
    dispatch(filterTodo(params));
  }

  return (
    <>
      {" "}
      <div className="w-full max-w-2xl flex gap-3 mt-5">
        <button
          onClick={() => handelClick("All")}
          className={`px-6 py-2 border rounded-lg font-semibold ${filter === "All" ? "bg-amber-800 text-amber-50" : ""}`}
        >
          All
        </button>
        <button
          onClick={() => handelClick("Active")}
          className={`px-6 py-2 border rounded-lg font-semibold ${filter === "Active" ? "bg-amber-800 text-amber-50" : ""}`}
        >
          Active
        </button>
        <button
          onClick={() => handelClick("Completed")}
          className={`px-6 py-2 border rounded-lg font-semibold ${filter === "Completed" ? "bg-amber-800 text-amber-50" : ""}`}
        >
          Completed
        </button>
      </div>
    </>
  );
};
