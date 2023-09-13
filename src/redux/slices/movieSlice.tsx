import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {IFullMovie, IMovieResponse, IShortMovie} from "../../interfaces";
import {movieService} from "../../services";
import {AxiosError} from "axios";

interface IState {
    movieData: IShortMovie[],
    fullMovie: IFullMovie,
    moviesByGenre: IShortMovie[]
    status: string
}

const initialState: IState = {
    movieData: [],
    fullMovie: null,
    moviesByGenre: [],
    status: null
}

const getAllMovies = createAsyncThunk<IShortMovie[], number>(
    'movieSlice/getAllMovies',
    async (page, {rejectWithValue}) => {
        try {
            const {data: {results}} = await movieService.getAllMovies(page)
            return results
        } catch (e) {
            const err = e as AxiosError
            rejectWithValue(err.response.data)
        }
    }
)

const getMoviesByGenre = createAsyncThunk<IShortMovie[], {
    page: number,
    with_genres: number
}>(
    'movieSlice/getMoviesByGenre',
    async ({page, with_genres}, {rejectWithValue}) => {
        try {
            const {data: {results}} = await movieService.byGenre(page, with_genres);
            return results
        } catch (e) {
            const err = e as AxiosError
            rejectWithValue(err.response.data)
        }
    }
)

const getFullMovie = createAsyncThunk<IFullMovie, number>(
    'movieSlice/getFullMovie',
    async (id, {rejectWithValue}) => {
        try {
            const {data} = await movieService.byID(id)
            return data
        } catch (e) {
            const err = e as AxiosError
            rejectWithValue(err.response.data)
        }
    }
)


const movieSlice = createSlice({
        name: 'movieSlice',
        initialState,
        reducers: {
            resetFullMovie: (state) => {
                state.fullMovie = null
            },
            resetMoviesByGenre: (state) => {
                state.moviesByGenre = null
            }
        },
        extraReducers: builder => builder
            .addCase(getAllMovies.fulfilled, (state, action) => {
                state.movieData = action.payload
                state.status = 'fulfilled'
            })
            .addCase(getAllMovies.pending, (state) => {
                state.status = 'pending'
            })
            .addCase(getFullMovie.fulfilled, (state, action) => {
                state.fullMovie = action.payload
            })
            .addCase(getMoviesByGenre.fulfilled, (state, action) => {
                state.moviesByGenre = action.payload
            })
    }
)

const {reducer: movieReducer, actions} = movieSlice;

const movieActions = {
    ...actions,
    getAllMovies,
    getFullMovie,
    getMoviesByGenre
}

export {
    movieActions,
    movieReducer
}