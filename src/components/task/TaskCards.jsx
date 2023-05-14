import AddTaskCardButton from "./button/AddTaskCardButton";
import TaskCard from "./TaskCard";

const TaskCards = () => {
  const style = {
    display: "inline-flex",
  };
	
  return (
    <div style={style}>
      <TaskCard />
      <AddTaskCardButton />
    </div>
  );
};

export default TaskCards;
