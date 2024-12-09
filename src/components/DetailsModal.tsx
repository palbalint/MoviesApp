import React, { useEffect } from "react";
import { Movie } from "../interfaces";
import "../styles/DetailsModal.scss";

interface DetailsModalProps {
  onClose: () => void;
  movie: Movie | undefined;
  onNextMovie: () => void;
}

const DetailsModal: React.FC<DetailsModalProps> = ({
  onClose,
  movie,
  onNextMovie,
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
                <td>{movie?.Director}</td>
                <td>{movie?.Distributor}</td>
                <td>{movie?.Production_Budget}</td>
                <td>{movie?.Worldwide_Gross}</td>
              </tr>
            </tbody>
          </table>
          <div>
            <button>Előző film</button>
            <button onClick={onNextMovie}>Következő film</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsModal;
