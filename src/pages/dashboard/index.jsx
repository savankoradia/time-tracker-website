import NewTask from "../task/NewTask";
import ListTasks from "../task/ListTasks";
import { init } from "../../utils/dbStore";
const Dashboard = () => {
    init();
    return (
        <div>
            {/* Display new task area */}
            <NewTask />
            <ListTasks />
        </div>
    );
};
export default Dashboard;