import React, { useContext, useState } from "react";
import Table from "./Table";
import DetailsModal from "./DetailsModal";
import { Movie } from "../interfaces";
import { MovieContext } from "../MovieContext";
import PageHeader from "./PageHeader";
import moviesData from "../movies.json";
import {
  ROWS_PER_PAGE,
  SortingDirections,
  SortingKeys,
} from "../helpers/helpers";
import Pagination from "./Pagination";

const TableContainer: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedMovie, setSelectedMovie] = useState<Movie>({} as Movie);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [sortKey, setSortKey] = useState<SortingKeys>("" as SortingKeys);
  const [sortOrder, setSortOrder] = useState<SortingDirections>(
    SortingDirections.NONE
  );
  const [currentPage, setCurrentPage] = useState<number>(1);

  const { movies, setMovies } = useContext(MovieContext);

  const filteredMovies = searchQuery
    ? movies.filter((movie) =>
        movie.Title?.toString()
          .toLowerCase()
          .includes(searchQuery?.toLowerCase())
      )
    : movies;

  const sortedMovies = [...filteredMovies].sort((a, b) => {
    if (sortOrder === SortingDirections.NONE) {
      return 0;
    }

    if (sortKey === SortingKeys.TITLE) {
      return sortOrder === SortingDirections.ASC
        ? a.Title?.toString().localeCompare(b.Title?.toString())
        : b.Title?.toString().localeCompare(a.Title?.toString());
    }

    if (sortKey === SortingKeys.RATING) {
      return sortOrder === SortingDirections.DESC
        ? b.IMDB_Rating - a.IMDB_Rating
        : a.IMDB_Rating - b.IMDB_Rating;
    }

    return 0;
  });

  const startIndex = (currentPage - 1) * ROWS_PER_PAGE;
  const paginatedMovies = sortedMovies.slice(
    startIndex,
    startIndex + ROWS_PER_PAGE
  );

  const totalPages = Math.ceil(filteredMovies.length / ROWS_PER_PAGE);

  const handleSearch = (query: string): void => {
    setSearchQuery(query);
  };

  const handleDeleteMovie = (id: number): void => {
    setMovies((prevMovies) => prevMovies.filter((movie) => movie.Id !== id));
  };

  const handleReloadMovies = (): void => {
    setMovies(moviesData);
  };

  const handleCloseModal = (): void => {
    setSelectedMovie({} as Movie);
    setIsModalOpen(false);
  };

  const handleOpenModal = (movie: Movie): void => {
    setSelectedMovie(movie);
    setIsModalOpen(true);
  };

  const handleSelectNextMovie = (): void => {
    setSelectedMovie(
      movies.find((m) => m.Id === selectedMovie.Id + 1) || ({} as Movie)
    );
  };

  const handleSelectPreviousMovie = (): void => {
    setSelectedMovie(
      movies.find((m) => m.Id === selectedMovie.Id - 1) || ({} as Movie)
    );
  };

  const handleSort = (key: SortingKeys) => {
    if (key === sortKey) {
      setSortOrder((prevOrder) =>
        prevOrder === SortingDirections.ASC
          ? SortingDirections.DESC
          : prevOrder === SortingDirections.DESC
          ? SortingDirections.NONE
          : SortingDirections.ASC
      );
    }

    setSortKey(key);
  };

  const handlePageChanged = (page: number): void => {
    setCurrentPage(page);
  };

  return (
    <>
      <PageHeader onSearch={handleSearch} onReload={handleReloadMovies} />
      <Table
        openModal={handleOpenModal}
        movies={paginatedMovies}
        onDelete={handleDeleteMovie}
        onSort={handleSort}
        activeSortKey={sortKey}
        activeSortOrder={sortOrder}
      />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChanged={handlePageChanged}
      />
      {isModalOpen && (
        <DetailsModal
          onClose={handleCloseModal}
          movie={selectedMovie}
          onNextMovie={handleSelectNextMovie}
          onPreviousMovie={handleSelectPreviousMovie}
        />
      )}
    </>
  );
};

export default TableContainer;
