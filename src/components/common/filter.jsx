import React, { Component } from "react";

class Filter extends Component {
  render() {
    const { genres } = this.props;
    const genreList = genres.map((genre, index) => (
      <a
        className="list-group-item list-group-item-action"
        key={index}
        onClick={() => this.props.onGenreSelection(genre.name)}
      >
        {genre.name}
      </a>
    ));
    return <div className="list-group">{genreList}</div>;
  }
}

export default Filter;
