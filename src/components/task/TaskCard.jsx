import TaskAddInput from "./input/TaskAddInput";
import TaskCardDeleteButton from "./button/TaskCardDeleteButton";
import TaskCardTitle from "./title/TaskCardTitle";
import Tasks from "./Tasks";
import { useState } from "react";

export const TaskCard = () => {
  const [inputText, setInputText] = useState("");
  const [taskList, setTaskList] = useState([]);
  return (
    <div>
      <TaskCardTitle />
      <TaskCardDeleteButton />
      <TaskAddInput
        inputText={inputText}
        setInputText={setInputText}
        taskList={taskList}
        setTaskList={setTaskList}
      />
      <Tasks inputText={inputText} taskList={taskList} setTaskList={setTaskList} />
    </div>
  );
};

export default TaskCard;
