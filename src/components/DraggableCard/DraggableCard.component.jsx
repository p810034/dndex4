import React from "react";
import { useDrag } from "react-dnd";
import { ItemTypes } from "../../Constants";
import Card from "../Card/Card.component";

const DraggableCard = props => {
  const [{}, dragRef] = useDrag({
    item: { type: ItemTypes.CARD, ...props }
  });

  return (
    <div ref={dragRef}>
      <Card task={props.task} />
    </div>
  );
};

export default DraggableCard;