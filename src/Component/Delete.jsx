import React from "react";
import { XCircle } from "lucide-react";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { delTodo } from "../features/todo/todoSlice";

export const Delete = ({item}) => {
  const dispatch = useDispatch();

  function handelClick() {
   Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
 
  if (result.isConfirmed) {
     dispatch(delTodo(item))
    Swal.fire({
      title: "Deleted!",
      text: "Your file has been deleted.",
      icon: "success"
    });
  }
});
  }

  return (
    <XCircle
      onClick={handelClick}
      className="text-red-500 cursor-pointer hover:scale-110 transition"
      size={22}
    />
  );
};
