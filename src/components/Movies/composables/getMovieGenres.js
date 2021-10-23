const getMovieGenres = (genres, movie_genre_ids) => {
  return genres.filter((genre) => movie_genre_ids.includes(genre.id))
    .map((g) => {
      return g.name;
    })
    .join(", ");
}

export default getMovieGenres;

