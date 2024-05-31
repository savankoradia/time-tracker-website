import { useContext } from "react";
import { TaskContext } from "./TaskContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import { MDBBtn } from "mdb-react-ui-kit";

const JumpStart = ({ task }) => {
  const { jumpStartTask } = useContext(TaskContext);
  const start = () => {
    jumpStartTask(task.id);
  };
  if (!task.endTime) {
    return (<></>)
  }
  return (
    <>
      <MDBBtn color="success" onClick={start}>
        <FontAwesomeIcon icon={faPlayCircle} />
      </MDBBtn>
    </>
  );
};

export default JumpStart;
