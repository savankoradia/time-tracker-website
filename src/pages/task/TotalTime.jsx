import DisplayTime from "./DisplayTime";
const TotalTime = ({tasks}) => {
    var totalTimeSpent = 0;
    totalTimeSpent = tasks.map((task) => task.endTime ? task.endTime - task.startTime : 0).reduce((sum, time) => sum + time, 0);
    return <DisplayTime startTime={0} endTime={totalTimeSpent} />;
};
export default TotalTime;