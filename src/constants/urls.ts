const baseURL = 'https://api.themoviedb.org/3/'

const movies = 'discover/movie'

const urls = {
    movies: {
        base: movies,
        byID: (id: number): string => `${movies}/${id}`
    },
    posters: {
        byID: (id: number): string => `/movie/${id}/images`
    }

}

export {
    urls,
    baseURL,
}