import { useContext } from "react";
import { MDBTable, MDBTableHead, MDBTableBody } from "mdb-react-ui-kit";
import { TaskContext } from "./TaskContext";
import DisplayTime from "./DisplayTime";
import TotalTime from "./TotalTime";
import DeleteTask from "./DeleteTask";

const ListTasks = () => {
  const { tasks } = useContext(TaskContext);
  return (
    <MDBTable>
      <MDBTableHead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Date</th>
          <th scope="col">Time Spent</th>
          <th scope="col"></th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        {tasks &&
          Object.entries(tasks).map(([key, task], index) => {
            return (
              <tr key={key}>
                <th scope="row">{index + 1}</th>
                <td>{task.name}</td>
                <td>{new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(task.startTime)}</td>
                <td>
                  <DisplayTime
                    startTime={task.startTime}
                    endTime={task.endTime}
                  />
                </td>
                <td>
                  <DeleteTask task={task} />
                </td>
              </tr>
            );
          })}
        <tr>
          <th scope="row"></th>
          <td></td>
          <td>
            <b>Total Time</b>
          </td>
          <td>
            <b>
              <TotalTime tasks={tasks} />
            </b>
          </td>
          <td></td>
        </tr>
      </MDBTableBody>
    </MDBTable>
  );
};
export default ListTasks;
