export const TaskCardDeleteButton = ({
  taskCardList,
  setTaskCardList,
  taskCard,
}) => {
  const taskCardDelete = (id) => {
    setTaskCardList(taskCardList.filter((e) => e.id !== id));
  };

  const style = {
    appearance: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "none",
    borderRadius: "100vmax",
    aspectRatio: "1/1",
    width: "24px",
    fontWeight: "bold",
    cursor: "pointer",
  };

  return (
    <div>
      <button onClick={() => taskCardDelete(taskCard.id)} style={style}>
        ×
      </button>
    </div>
  );
};

export default TaskCardDeleteButton;
