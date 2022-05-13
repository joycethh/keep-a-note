import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

const CreateArea = (props) => {
  const [userInput, setUserInput] = useState({
    title: "",
    content: ""
  });
  const [isExpanded, setExpanded] = useState(false);

  const handleExpand = () => {
    setExpanded(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInput({ ...userInput, [name]: value });
  };

  const handleSumbit = (e) => {
    const inputTitle = userInput.title.trim();
    const inputContent = userInput.content.trim();
    if (inputTitle.length === 0 || inputContent.length === 0) {
      alert("You must input something");
    } else {
      props.onAdd(userInput);
      setUserInput({
        title: "",
        content: ""
      });
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSumbit();
    }
  };

  return (
    <div>
      <form className="create-note" onKeyDown={handleKeyDown}>
        {isExpanded && (
          <input
            name="title"
            onChange={handleChange}
            value={userInput.title}
            placeholder="Title"
          />
        )}

        <textarea
          name="content"
          onClick={handleExpand}
          onChange={handleChange}
          value={userInput.content}
          placeholder="Take a note"
          row={isExpanded ? 3 : 1}
        />

        <Zoom in={isExpanded}>
          <Fab onClick={handleSumbit}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
};

export default CreateArea;
