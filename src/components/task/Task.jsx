import { Draggable } from "react-beautiful-dnd";

export const Task = ({ task, taskList, setTaskList, index }) => {
  const style = {
    display: "flex",
    justifyContent: "space-between",
    gap: "16px",
    marginTop: "10px",
    padding: "16px",
    backgroundColor: "#d1d5db",
  };

  const handleDelete = (id) => {
    setTaskList(taskList.filter((task) => task.id !== id));
  };

  return (
    <Draggable index={index} draggableId={task.draggableId}>
      {(provided) => (
        <div
          key={task.id}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <div style={style}>
            <p>{task.text}</p>
            <button onClick={() => handleDelete(task.id)}>消去</button>
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default Task;
