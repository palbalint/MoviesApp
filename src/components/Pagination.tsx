import React from "react";
import "../styles/Pagination.scss";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChanged: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChanged,
}) => {
  return (
    <div className="pagination">
      <button
        onClick={() => onPageChanged(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Előző
      </button>
      <button
        onClick={() => onPageChanged(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Következő
      </button>
    </div>
  );
};

export default Pagination;
