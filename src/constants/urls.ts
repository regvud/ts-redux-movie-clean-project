const baseURL = 'https://api.themoviedb.org/3/'
const posterURL = 'https://image.tmdb.org/t/p/w500/'

const movies = 'discover/movie';
const search = 'search/movie'
const genres = 'genre/movie/list'
const urls = {
    movies: {
        base: movies,
        byID: (id: number): string => `movie/${id}`,
        search: search
    },
    genres: {
        base: genres
    }
}

export {
    urls,
    baseURL,
    posterURL
}