import { MDBCol, MDBInput, MDBRow, MDBBtn } from "mdb-react-ui-kit";
import React, { useContext, useEffect, useState } from "react";
import { TaskContext } from "./TaskContext";
import Timer from "./Timer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPauseCircle, faPlayCircle } from "@fortawesome/free-solid-svg-icons";

const NewTask = () => {
  const { tasks, addTask, updateTask, getLastRunningTask } =
    useContext(TaskContext);
  const [taskName, setTaskName] = useState("");
  const [state, setState] = useState(false);
  const [currentTask, setCurrentTask] = useState({
    id: null,
    name: "",
    startTime: null,
    endTime: null,
  });

  useEffect(() => {
    let task = getLastRunningTask();
    if (task && !task.endTime) {
      setCurrentTask(task);
      setState(true);
      setTaskName(task.name);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tasks]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!state) {
      //if state is not running, means create a new task, save and start timer
      setState(true);
      let currentTime = Date.now();
      let task = {
        id: currentTime,
        name: taskName,
        startTime: currentTime,
        endTime: null,
      };
      setCurrentTask(task);
      addTask(task);
    } else {
      //if state is running, means update a task with endTime and stop timer
      let updatedTask = currentTask;
      updatedTask.endTime = Date.now();
      updateTask(updatedTask.id, updatedTask);
      setState(false);
      setTaskName("");
      setCurrentTask(null);
    }
  };

  return (
    <form className="w-100" onSubmit={handleSubmit}>
      <MDBRow>
        <MDBCol size="md-8">
          <MDBInput
            className="mb-4"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
            label="Working on?"
            id="taskName"
            type="text"
            disabled={state}
            size="lg"
          />
        </MDBCol>
        <MDBCol size="md-4">
          <MDBBtn
            className="me-1"
            color={!state ? "success" : "danger"}
            disabled={taskName.length === 0}
            type="submit"
            block
            size="lg"
          >
            {!currentTask && (
              <>
                <FontAwesomeIcon icon={faPlayCircle} /> Start Tracking
              </>
            )}
            {currentTask && !currentTask.endTime && (
              <>
                <FontAwesomeIcon icon={faPauseCircle} /> &nbsp;
                <Timer startTime={currentTask.startTime} />
              </>
            )}
          </MDBBtn>
        </MDBCol>
      </MDBRow>
    </form>
  );
};
export default NewTask;
