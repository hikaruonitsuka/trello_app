import { useState } from "react";

export const TaskCardTitle = () => {
  const [isClick, setIsClick] = useState(false);
  const [inputCardTitle, setInputCardTitle] = useState("Today");

  const handleClick = () => {
    setIsClick(true);
  };

  const handleChange = (e) => {
    setInputCardTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsClick(false);
  };

  const handleBlur = () => {
    setIsClick(false);
  };

  return (
    <div onClick={handleClick}>
      {isClick ? (
        <form onSubmit={handleSubmit}>
          <input
            autoFocus
            maxLength="10"
            type="text"
            onChange={handleChange}
            onBlur={handleBlur}
            value={inputCardTitle}
          />
        </form>
      ) : (
        <h3>{inputCardTitle}</h3>
      )}
    </div>
  );
};

export default TaskCardTitle;
