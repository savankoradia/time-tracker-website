const DisplayTime = ({ startTime, endTime }) => {
  if (!endTime) {
    return;
  }
  const elapsedTime = endTime - startTime;
  const hours = Math.floor(elapsedTime / 3600000);
  const minutes = Math.floor((elapsedTime % 3600000) / 60000);
  const seconds = Math.floor((elapsedTime % 60000) / 1000);
  return (
    <div>
      {hours.toString().padStart(2, "0")}h {minutes.toString().padStart(2, "0")}m {seconds.toString().padStart(2, "0")}s
    </div>
  );
};
export default DisplayTime;
