import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";

import Like from "./common/like";
import Pagination from "./common/pagination";
<<<<<<< HEAD
import { paginate } from "../utils/paginate";
import { filter as filterArray } from "../utils/filter";
import Filter from "./common/filter";
class Movies extends Component {
  state = {
    movies: getMovies(),
    pageSize: 4,
    currentPage: 1,
    genres: getGenres(),
    currentGenre: "none"
=======

class Movies extends Component {
  state = {
    movies: getMovies()
>>>>>>> parent of 45fc746... afterPagination
  };

  handleDelete = movie => {
    const movies = this.state.movies.filter(e => e._id !== movie._id);
    this.setState({ movies });
    console.log(movie);
  };

  handleLike = movie => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };

  handlePageLimit = () => {
    const movies = [...this.state.movies];
    // finish pagination excersize
  };
<<<<<<< HEAD
  handleGenreSelection = genre => {
    console.log(genre);
    // this.setState({ currentGenre: genre.name });
    // console.log(filterArray(this.state.movies, genre));
  };

  render() {
    const { movies: allMovies, pageSize, currentPage, genres } = this.state;

    if (allMovies.length === 0)
      return <p>There are no movies in the database.</p>;

    const movies = paginate(allMovies, currentPage, pageSize);

    return (
      <div className="row">
        <div className="col-3">
          <Filter
            genres={genres}
            onGenreSelection={this.handleGenreSelection}
            currentGenre={this.state.currentGenre}
          />
        </div>
        <div className="col">
          <p>There are {allMovies.length} Movies in the Database</p>
=======
  render() {
    if (this.state.movies.length !== 0) {
      return (
        <div>
          <p>There are {this.state.movies.length} Movies in the Database</p>
>>>>>>> parent of 45fc746... afterPagination

          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Genre</th>
                <th>Stock</th>
                <th>Rating</th>
              </tr>
            </thead>
            <tbody>
<<<<<<< HEAD
              {movies.map(movie => (
=======
              {this.state.movies.map(movie => (
>>>>>>> parent of 45fc746... afterPagination
                <tr key={movie._id}>
                  <td>{movie.title}</td>
                  <td>{movie.genre.name}</td>
                  <td>{movie.numberInStock}</td>
                  <td>{movie.dailyRentalRate}</td>
                  <td>
                    <Like
                      liked={movie.liked}
                      onClick={() => this.handleLike(movie)}
                    />
                  </td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => this.handleDelete(movie)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
<<<<<<< HEAD
          <Pagination
            pageSize={pageSize}
            itemsCount={allMovies.length}
            onPageChange={this.handlePageChange}
            currentPage={currentPage}
          />
        </div>
      </div>
    );
=======
          <Pagination />
        </div>
      );
    }
    return <p>There are no movies in the database.</p>;
>>>>>>> parent of 45fc746... afterPagination
  }
}

export default Movies;
