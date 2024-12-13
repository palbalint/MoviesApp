import React from "react";
import { Movie } from "../interfaces";
import "../styles/DetailsModal.scss";
import { DASH, numberFormatter } from "../helpers/helpers";

interface DetailsModalProps {
  onClose: () => void;
  movie: Movie | undefined;
  onNextMovie: () => void;
  onPreviousMovie: () => void;
}

const DetailsModal: React.FC<DetailsModalProps> = ({
  onClose,
  movie,
  onNextMovie,
  onPreviousMovie,
}) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <div>{movie?.Title}</div>
          <button onClick={onClose} className="close-button">
            ×
          </button>
        </div>
        <div className="modal-body">
          <table>
            <thead>
              <tr>
                <th>Rendező</th>
                <th>Forgalmazó</th>
                <th>Költségvetés</th>
                <th>Összbevétel</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{movie?.Director || DASH}</td>
                <td>{movie?.Distributor || DASH}</td>
                <td>{numberFormatter(movie?.Production_Budget) || DASH}</td>
                <td>{numberFormatter(movie?.Worldwide_Gross) || DASH}</td>
              </tr>
            </tbody>
          </table>
          <div>
            <button onClick={onPreviousMovie}>Előző film</button>
            <button onClick={onNextMovie}>Következő film</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsModal;
