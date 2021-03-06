import React, { createContext, useState } from "react";

export const SpaceContext = createContext([{}, () => {}]);

const SpaceContextProvider = props => {
  const [currentSpace, setSpace] = useState("lab");
  return (
    <SpaceContext.Provider value={{ currentSpace, setSpace }}>
      {props.children}
    </SpaceContext.Provider>
  );
};

export default SpaceContextProvider;
