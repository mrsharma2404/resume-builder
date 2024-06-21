import React from "react";
import {DndProvider, useDrag} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";
import Example from "./example";

const ReactDnD = () => {
  return (
    <div className="App">
      <DndProvider backend={HTML5Backend}>
        <Example />
      </DndProvider>
    </div>
  );
};

export default ReactDnD;
