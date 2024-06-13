import classNames from "classnames";

interface DraggableCardProps {
  color: string;
  index: number;
  onDragStart: (index: number) => void;
  onDragOver: (index: number) => void;
  onDrop: () => void;
}

const DraggableCard: React.FC<DraggableCardProps> = ({
  color,
  index,
  onDragStart,
  onDragOver,
  onDrop,
}) => {
  return (
    <div
      draggable
      onDragStart={() => onDragStart(index)}
      onDragOver={(e) => {
        e.preventDefault();
        onDragOver(index);
      }}
      onDrop={onDrop}
      className={classNames(
        `h-16 w-full my-4 py-8 rounded-lg shadow-lg flex items-center 
        justify-center text-white font-bold transition-transform duration-500`,
        {
          "bg-blue-500": color === "blue",
          "bg-purple-500": color === "purple",
          "bg-green-500": color === "green",
          "bg-red-500": color === "red",
        }
      )}
    >
      {color.charAt(0).toUpperCase() + color.slice(1)}
    </div>
  );
};

export default DraggableCard;
