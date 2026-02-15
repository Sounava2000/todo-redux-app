import React from "react";
import { Edit } from "lucide-react";
import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { updateTodo } from "../features/todo/todoSlice.js";
export const EditTodo = ({ item }) => {
  const [show, setShow] = useState(false);
const [newTodo,setnewTodo] = useState(item)
   const dispatch = useDispatch(); 
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  function handelChange(e) {
        const name = e.target.name;
    const value = e.target.value; 
    setnewTodo(
      (prev)=> {
        const copyCode = {...prev}
        copyCode[name]  =value
        return copyCode
      }
    )
  }
  function handelClick() {
    dispatch(updateTodo(newTodo))

  }
 
  
  return (
    <>
      <Edit
        variant="primary"
        onClick={handleShow}
        className="text-yellow-500 cursor-pointer"
        size={22}

      />

      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header   closeButton>
          <Modal.Title className="w-100 text-center">Todo Update</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <input
    type="text"
    name="task"
 value={newTodo.task}
 onChange={(e)=> handelChange(e)}
    className="form-control text-center py-3 fs-5 rounded-3 shadow-sm"
  />
       </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={() => {handelClick();handleClose()}} variant="primary" >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
