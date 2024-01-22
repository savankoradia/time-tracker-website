import { MDBContainer, MDBRow } from "mdb-react-ui-kit";
import DeleteMemory from "./DeleteMemory";
const Settings = () => {
  return (
    <MDBContainer>
      <MDBRow>
        <h1>Settings</h1>
      </MDBRow>
      <MDBRow>
        <DeleteMemory />
      </MDBRow>
    </MDBContainer>
  );
};
export default Settings;
