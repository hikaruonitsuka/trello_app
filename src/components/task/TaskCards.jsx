import { useState } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import AddTaskCardButton from "./button/AddTaskCardButton";
import TaskCard from "./TaskCard";

const reorder = (taskCardList, startIndex, endIndex) => {
  // タスクカードの並び替え
  const remove = taskCardList.splice(startIndex, 1);
  taskCardList.splice(endIndex, 0, remove[0]);
};

const TaskCards = () => {
  const [taskCardList, setTaskCardList] = useState([]);

  const handleDragEnd = (result) => {
    reorder(taskCardList, result.source.index, result.destination.index);
    setTaskCardList(taskCardList);
  };

  const style = {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "flex-start",
    gap: "40px",
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="droppable" direction="horizontal">
        {(provided) => (
          <div
            style={style}
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {taskCardList.map((taskCard, index) => (
              <TaskCard
                key={taskCard.id}
                index={index}
                taskCardList={taskCardList}
                setTaskCardList={setTaskCardList}
                taskCard={taskCard}
              />
            ))}
            {provided.placeholder}
            <AddTaskCardButton
              taskCardList={taskCardList}
              setTaskCardList={setTaskCardList}
            />
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default TaskCards;
