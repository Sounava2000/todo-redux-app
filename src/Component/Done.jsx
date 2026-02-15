import React from "react";
import { CheckCircle, Edit, XCircle } from "lucide-react";
import { useDispatch } from "react-redux";
import { markTodo } from "../features/todo/todoSlice";
 
export const Done = ( {item} ) => {
  const dispatch = useDispatch()
 function handelClick() {
  dispatch(markTodo(item))
 }
  return (
    <>
      <CheckCircle

        onClick={()=>handelClick()}
        className={`cursor-pointer text-blue-600 `}
        size={22}
      />
    </>
  );
};
