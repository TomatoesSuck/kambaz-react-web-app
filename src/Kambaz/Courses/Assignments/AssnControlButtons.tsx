




import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "./GreenCheckmark";
import { FaTrash } from "react-icons/fa";

interface AssnControlButtonsProps {
  assignmentId: string;
  onDelete: (assignmentId: string) => void;
}

export default function AssnControlButtons({ 
  assignmentId, 
  onDelete 
}: AssnControlButtonsProps) {
  return (
    <div className="float-end">
      <FaTrash 
        className="text-danger me-2 mb-1" 
        onClick={() => onDelete(assignmentId)}
        style={{ cursor: 'pointer' }}
      />
      <GreenCheckmark />
      <IoEllipsisVertical />
    </div>
  );
}