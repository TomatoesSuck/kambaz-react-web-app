
import { FaSearch } from 'react-icons/fa';

export default function SearchIcon() {
    return (
        <span className="position-absolute" style={{ left: "10px", top: "50%", transform: "translateY(-50%)", zIndex: 5 }}>
            <FaSearch className="text-secondary fs-5" />
        </span>
    );
}