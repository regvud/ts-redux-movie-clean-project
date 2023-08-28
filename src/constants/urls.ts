const baseURL = 'https://api.themoviedb.org/3/'

const movies = 'discover/movie'
const urls = {
    movies: {
        base: movies,
        byID: (id: number): string => `${movies}/${id}`
    }

}

export {
    urls,
    baseURL
}