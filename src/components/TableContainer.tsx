import React, { useContext, useState } from "react";
import Table from "./Table";
import DetailsModal from "./DetailsModal";
import { Movie } from "../interfaces";
import { MovieContext } from "../MovieContext";

const TableContainer: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedMovie, setSelectedMovie] = useState<Movie>();

  const { movies } = useContext(MovieContext);

  const handleCloseModal = () => {
    setSelectedMovie(undefined);
    setIsModalOpen(false);
  };

  const handleOpenModal = (movie: Movie) => {
    setSelectedMovie(movie);
    setIsModalOpen(true);
  };

  const handleSelectNextMovie = () => {
    setSelectedMovie(
      movies.find(
        (m) => m.Id === (selectedMovie ? selectedMovie.Id + 1 : undefined)
      )
    );
  };

  return (
    <>
      <Table openModal={handleOpenModal} />
      {isModalOpen && (
        <DetailsModal
          onClose={handleCloseModal}
          movie={selectedMovie}
          onNextMovie={handleSelectNextMovie}
        />
      )}
    </>
  );
};

export default TableContainer;
