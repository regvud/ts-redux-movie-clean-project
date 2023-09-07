const baseURL = 'https://api.themoviedb.org/3/'

const movies = 'discover/movie'
const posterURL = 'https://image.tmdb.org/t/p/w500'
const urls = {
    movies: {
        base: movies,
        byID: (id: number): string => `movie/${id}`
    },
    posters: {
        byID: (id: number): string => `/movie/${id}/images`
    }

}

export {
    urls,
    baseURL,
    posterURL
}