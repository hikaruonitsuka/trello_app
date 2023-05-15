import { v4 as uuidv4 } from "uuid";

export const AddTaskCardButton = ({ taskCardList, setTaskCardList }) => {
  const addTaskCard = () => {
    const taskCardId = uuidv4();
    setTaskCardList([
      ...taskCardList,
      {
        id: taskCardId,
        draggableId: `item${taskCardId}`,
      },
    ]);
  };
  const style = {
    appearance: "none",
    padding: "8px",
    border: "none",
    borderRadius: "100vmax",
    aspectRatio: "1/1",
    width: "40px",
    color: "#fff",
    backgroundColor: "#000",
    fontWeight: "bold",
    cursor: "pointer",
  };
  return (
    <div>
      <button style={style} onClick={addTaskCard}>
        ＋
      </button>
    </div>
  );
};

export default AddTaskCardButton;
