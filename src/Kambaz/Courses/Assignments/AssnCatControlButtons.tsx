







import { IoEllipsisVertical } from "react-icons/io5";
import { FaPlus } from "react-icons/fa";

export default function AssnCatControlButtons() {
  return (
    <div className="float-end">
      <div className="d-flex">
        <div className="rounded-pill px-1 py-1 bg-gray border border-black text-center me-2"
          style={{ fontSize: "0.8rem", lineHeight: "1.2rem" }}>
          40% of Total
        </div>

        <FaPlus className="fs-4.5 mt-1" />
        <IoEllipsisVertical className="mt-1" />
      </div>
    </div>
  );}
