import React, { useContext } from "react";
import "../styles/Table.scss";
import { Movie } from "../interfaces";
import { MovieContext } from "../MovieContext";

interface TableProps {
  openModal: (movie: Movie) => void;
}

const Table: React.FC<TableProps> = ({ openModal }) => {
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

  const { movies } = useContext(MovieContext);

  return (
    <table>
      <thead>
        <tr>
          <th className="title">Cím</th>
          <th>Hossz</th>
          <th>Megjelenés Dátuma</th>
          <th>Értékelés</th>
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
              <button>Törlés</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
