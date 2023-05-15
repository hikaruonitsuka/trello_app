import TaskAddInput from "./input/TaskAddInput";
import TaskCardDeleteButton from "./button/TaskCardDeleteButton";
import TaskCardTitle from "./title/TaskCardTitle";
import Tasks from "./Tasks";
import { useState } from "react";
import { Draggable } from "react-beautiful-dnd";

export const TaskCard = ({
  taskCardList,
  setTaskCardList,
  taskCard,
  index,
}) => {
  const [inputText, setInputText] = useState("");
  const [taskList, setTaskList] = useState([]);

  const style = {
    display: "flex",
    gap: "8px",
    justifyContent: "space-between",
  };
  return (
    <Draggable draggableId={taskCard.id} index={index}>
      {(provided) => (
        <div {...provided.draggableProps} ref={provided.innerRef}>
          <div style={style} {...provided.dragHandleProps}>
            <TaskCardTitle />
            <TaskCardDeleteButton
              taskCardList={taskCardList}
              setTaskCardList={setTaskCardList}
              taskCard={taskCard}
            />
          </div>
          <TaskAddInput
            inputText={inputText}
            setInputText={setInputText}
            taskList={taskList}
            setTaskList={setTaskList}
          />
          <Tasks
            inputText={inputText}
            taskList={taskList}
            setTaskList={setTaskList}
          />
        </div>
      )}
    </Draggable>
  );
};

export default TaskCard;
