import React from "react";

const Buttonsss = ({ handleClick, children }) => {
  console.log(children);

  return <button onClick={handleClick}>{children}</button>;
};

export default Buttonsss