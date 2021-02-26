import React from "react";
import { useDrop } from "react-dnd";
import "./Column.styles.scss";
import DraggableCard from "../DraggableCard/DraggableCard.component";
import { ItemTypes } from "../../Constants";

const Column = ({ tasks: { title, tasks }, columnIndex, handleMoveMyTask }) => {
  const cards = tasks.map((task, index) => {
    const propsToDraggbleCard = { task, columnIndex, index };
    return (
      <DraggableCard
        key={`${columnIndex} ${index} ${task}`}
        {...propsToDraggbleCard}
      />
    );
  });

  const [{}, dropRef] = useDrop({
    accept: ItemTypes.CARD,
    drop: item => {
      const from = item;
      const to = { columnIndex };
      handleMoveMyTask(from, to);
    },
    canDrop: item => item.columnIndex !== columnIndex
  });

  return (
    <div ref={dropRef} className="column">
      <p className="column__title">{title}</p>
      <div className="column__cards">{cards}</div>
      <div className="column__add-task-input">
      </div>
    </div>
  );
};

export default Column;