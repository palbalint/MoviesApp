import React from "react";
import "../styles/Table.scss";
import { Movie } from "../interfaces";
import { SortingDirections, SortingKeys } from "../helpers/helpers";

interface TableProps {
  openModal: (movie: Movie) => void;
  movies: Movie[];
  onDelete: (id: number) => void;
  onSort: (key: SortingKeys) => void;
  activeSortKey: SortingKeys;
  activeSortOrder: SortingDirections;
}

const Table: React.FC<TableProps> = ({
  openModal,
  movies,
  onDelete,
  onSort,
  activeSortKey,
  activeSortOrder,
}) => {
  const getClassName = (rating: number): string => {
    if (rating >= 1 && rating <= 4) {
      return "rating-weak";
    } else if (rating > 4 && rating <= 7) {
      return "rating-mid";
    } else if (rating > 7 && rating <= 10) {
      return "rating-good";
    } else {
      return "";
    }
  };

  const renderSortIcon = (key: SortingKeys): string => {
    if (activeSortKey === key) {
      return activeSortOrder === SortingDirections.ASC
        ? " ↑"
        : activeSortOrder === SortingDirections.DESC
        ? " ↓"
        : "";
    }
    return "";
  };

  return (
    <div className="table-container">
      <table className="table">
        <thead>
          <tr>
            <th
              className="title sortable"
              onClick={() => onSort(SortingKeys.TITLE)}
            >
              Cím{renderSortIcon(SortingKeys.TITLE)}
            </th>
            <th>Hossz</th>
            <th>Megjelenés Dátuma</th>
            <th className="sortable" onClick={() => onSort(SortingKeys.RATING)}>
              Értékelés{renderSortIcon(SortingKeys.RATING)}
            </th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie: Movie) => (
            <tr key={movie.Id} onClick={() => openModal(movie)}>
              <td className="title">{movie.Title}</td>
              <td>{movie.Running_Time_min}</td>
              <td>{movie.Release_Date}</td>
              <td className={getClassName(movie.IMDB_Rating)}>
                {movie.IMDB_Rating || "—"}
              </td>
              <td>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onDelete(movie.Id);
                  }}
                >
                  Törlés
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
