import React, { useEffect, useState } from "react";
import {
  MDBInput,
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
import Timer from "./Timer";
import { createTask, getLastEntry, updateTask } from "../../utils/dbStore";

const NewTask = () => {
  var taskData = {
    id: null,
    name: null,
    startTime: null,
    endTime: null,
  };
  const [name, setName] = useState("");
  const [task, setTask] = useState(null);
  const [state, setState] = useState(false);

  useEffect(() => {
    //onload check if there is task exists in the database which is not ended.
    getLastEntry().then((lastEntry) => {
      if (lastEntry?.endTime) {
        return;
      }

      taskData.id = lastEntry.id;
      taskData.name = lastEntry.name;
      taskData.startTime = lastEntry.startTime;
      taskData.endTime = null;
      setName(taskData.name);
      setState(true);
      setTask(taskData);
    });
    // eslint-disable-next-line
  }, []);

  function saveNewTask() {
    // works as a Toggle. if task is already running then it will stop and remove data from session and states
    if (task) {
      taskData = task;
      taskData.endTime = Date.now();
      
      updateTask(taskData);
      setTask(null);
      setName("");
      setState(false);
    } else {
      taskData.name = name;
      taskData.startTime = Date.now();

      setTask(taskData);
      setState(true);
      createTask(taskData);
    }
  }

  return (
    <div className="d-flex p-2">
      <form
        className="w-100"
        onSubmit={(e) => {
          e.preventDefault();
          saveNewTask();
        }}
      >
        <MDBContainer>
          <MDBRow>
            <MDBCol size="md-8">
              <MDBInput
                className="mb-4"
                value={name}
                onChange={(e) => setName(e.target.value)}
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
                disabled={name.length === 0}
                type="submit"
                block
                size="lg"
              >
                {!state ? (
                  "Start Tracking"
                ) : (
                  <Timer startTime={task.startTime} />
                )}
              </MDBBtn>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </form>
    </div>
  );
};
export default NewTask;
