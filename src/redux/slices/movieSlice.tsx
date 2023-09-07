import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IFullMovie, IMovieResponse} from "../../interfaces";
import {movieService} from "../../services";
import {AxiosError} from "axios";

interface IState {
    movieData: IMovieResponse,
    fullMovie: IFullMovie
}

const initialState: IState = {
    movieData: null,
    fullMovie: null
}

const getAllMovies = createAsyncThunk<IMovieResponse, number>(
    'movieSlice/getAllMovies',
    async (page, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getAllMovies(page)
            return data
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
            }
        },
        extraReducers: builder => builder
            .addCase(getAllMovies.fulfilled, (state, action) => {
                state.movieData = action.payload
            })
            .addCase(getFullMovie.fulfilled, (state, action) => {
                state.fullMovie = action.payload
            })
    }
)

const {reducer: movieReducer, actions} = movieSlice;

const movieActions = {
    ...actions,
    getAllMovies,
    getFullMovie
}

export {
    movieActions,
    movieReducer
}