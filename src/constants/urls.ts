const baseURL = 'https://api.themoviedb.org/3/'

const movies = 'discover/movie'
const posters = 'https://image.tmdb.org/t/p/w500'

const urls = {
    movies: {
        base: movies,
        byID: (id: number): string => `${movies}/${id}`
    },
    posters: {
        base: posters,
        byPath: (path: string): string => `https://image.tmdb.org/t/p/w500${path}`
    }

}

export {
    urls,
    baseURL,
}