import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import Like from "./common/like";
import Pagination from "./common/pagination";

class Movies extends Component {
  state = {
    movies: getMovies()
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
  render() {
    if (this.state.movies.length !== 0) {
      return (
        <div>
          <p>There are {this.state.movies.length} Movies in the Database</p>

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
              {this.state.movies.map(movie => (
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
          <Pagination />
        </div>
      );
    }
    return <p>There are no movies in the database.</p>;
  }
}

export default Movies;
