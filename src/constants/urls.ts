const baseURL = 'https://api.themoviedb.org/3/'
const postersBaseURL = 'https://image.tmdb.org/t/p/'

const movies = 'discover/movie'
const posters = 'original'

const urls = {
    movies: {
        base: movies,
        byID: (id: number): string => `${movies}/${id}`
    },
    posters: {
        base: posters,
        byPath: (path: string): string => `${posters}/${path}`
    }

}

export {
    urls,
    baseURL,
    postersBaseURL
}