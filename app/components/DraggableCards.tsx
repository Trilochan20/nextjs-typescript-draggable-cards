"use client";
import { useState, useEffect } from "react";
import DraggableCard from "./DraggableCard";

interface Item {
  id: string;
  color: string;
}

const initialItems: Item[] = [
  { id: "0", color: "blue" },
  { id: "1", color: "purple" },
  { id: "2", color: "green" },
  { id: "3", color: "red" },
];

const DraggableCards: React.FC = () => {
  const [items, setItems] = useState(initialItems);
  const [draggedIndex, setDraggedIndex] = useState<number | null>(null);

  useEffect(() => {
    const container = document.querySelector(".draggable-container");
    if (container) {
      container.classList.add("transition-all", "duration-300");
    }
  }, [items]);

  const handleDragStart = (index: number) => {
    setDraggedIndex(index);
  };

  const handleDragOver = (index: number) => {
    if (draggedIndex === null) return;
    if (draggedIndex !== index) {
      const newItems = [...items];
      const [draggedItem] = newItems.splice(draggedIndex, 1);
      newItems.splice(index, 0, draggedItem);
      setDraggedIndex(index);
      setItems(newItems);
    }
  };

  const handleDrop = () => {
    setDraggedIndex(null);
  };

  return (
    <div className="draggable-container flex flex-col m-8 h-64 cursor-grab">
      {items.map((item, index) => (
        <DraggableCard
          key={item.id}
          color={item.color}
          index={index}
          onDragStart={handleDragStart}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        />
      ))}
    </div>
  );
};

export default DraggableCards;
