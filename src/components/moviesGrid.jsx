import MovieCard from "./movieCard"

const MoviesGrid = ({ movies }) => {

    const cards = movies.map(movie => <MovieCard title={movie.Title} poster={movie.Poster} key={movie.imdbID
    } />)

    return (
        <>
            {cards}
        </>
    )
}

export default MoviesGrid