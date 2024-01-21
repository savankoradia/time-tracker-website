import { useState, useEffect } from "react";
import { MDBTable, MDBTableHead, MDBTableBody } from "mdb-react-ui-kit";

import { fetchAll } from "../../utils/localDataStore";
import DisplayTime from "./DisplayTime";
import TotalTime from "./TotalTime";

const ListTasks = () => {
  const [allTasks, setAllTasks] = useState(null);

  useEffect(() => {
    setAllTasks(fetchAll());
  }, []);

  if (allTasks) {
    return (
      <MDBTable>
        <MDBTableHead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Task</th>
            <th scope="col">Time spent</th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          {allTasks.map((task, index) => {
            return (
              <tr key={task.id}>
                <th scope="row">{index + 1}</th>
                <td>{task.name}</td>
                <td>
                  <DisplayTime
                    startTime={task.startTime}
                    endTime={task.endTime}
                  />
                </td>
              </tr>
            );
          })}
          <tr>
            <th scope="row"><b>Total Time Spent:</b></th>
            <td></td>
            <td>
              <b><TotalTime tasks={allTasks} /></b>
            </td>
          </tr>
        </MDBTableBody>
      </MDBTable>
    );
  } else {
    return <div>No data available.</div>
  }
};
export default ListTasks;
