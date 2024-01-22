import { MDBContainer, MDBRow } from "mdb-react-ui-kit";
import NewTask from "./NewTask";
import ListTasks from "./ListTasks";
import { TaskProvider } from "./TaskContext";

const Tasks = () => {
  return (
    <MDBContainer fluid>
      <TaskProvider>
        <MDBRow>
          {/* Display the form here */}
          <NewTask />
        </MDBRow>
        <MDBRow>
          {/* Display tasks list from here */}
          <ListTasks />
        </MDBRow>
      </TaskProvider>
    </MDBContainer>
  );
};
export default Tasks;
