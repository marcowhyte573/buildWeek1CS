import React, { useState } from "react";

const Buttons = (props) => {
  const [start, setStart] = useState(false);
  return (
    <div className="buttons">
      <button className="button clear">Clear</button>
      <button className="button randomize">Randomize</button>
      {start ? (
        <button
          onClick={() => {
            setStart(!start);
          }}
          className="button stop"
        >
          Stop
        </button>
      ) : (
        <button
          onClick={() => {
            setStart(!start);
          }}
          className="button start"
        >
          Start
        </button>
      )}
    </div>
  );
};
export default Buttons;
