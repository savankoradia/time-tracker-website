import React, { useState, useContext } from "react";
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from "mdb-react-ui-kit";
import { TaskContext } from "./TaskContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const DeleteTask = ({ task }) => {
  const [basicModal, setBasicModal] = useState(false);
  const { deleteTask } = useContext(TaskContext);

  const toggleOpen = () => setBasicModal(!basicModal);
  const handleDelete = () => {
    deleteTask(task.id);
    toggleOpen();
  };
  return (
    <>
      <MDBBtn color="danger" disabled={!task.endTime} onClick={toggleOpen}>
       <FontAwesomeIcon icon={faTrashAlt} /> Delete
      </MDBBtn>
      <MDBModal open={basicModal} setOpen={setBasicModal} tabIndex="-1">
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Delete Task: {task.name}?</MDBModalTitle>
              <MDBBtn
                className="btn-close"
                color="none"
                onClick={toggleOpen}
              ></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>Do you really want to delete this task?</MDBModalBody>

            <MDBModalFooter>
              <MDBBtn color="secondary" onClick={toggleOpen}>
                Close
              </MDBBtn>
              <MDBBtn color="danger" onClick={handleDelete}>
              <FontAwesomeIcon icon={faTrashAlt} /> Yes
              </MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
};
export default DeleteTask;
