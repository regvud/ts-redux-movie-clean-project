import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {IMovieResponse} from "../../interfaces";
import {movieService} from "../../services";
import axios, {AxiosError} from "axios";
import {urls} from "../../constants";

interface IState {
    movieData: IMovieResponse,
    moviePoster: FormData
    total_pages: number
}

const initialState: IState = {
    movieData: null,
    moviePoster: null,
    total_pages: null
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


const getPoster = createAsyncThunk<FormData, number>(
    'movieSlice/setPoster',
    async (id, {rejectWithValue}) => {
        try {
            const {data} = await axios.get(urls.posters.byID(id))
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
        reducers: {},
        extraReducers: builder => builder
            .addCase(getAllMovies.fulfilled, (state, action) => {
                state.movieData = action.payload
                state.total_pages = action.payload.total_pages
            })
            .addCase(getPoster.fulfilled, (state, action) => {
                state.moviePoster = action.payload
            })
    }
)

const {reducer: movieReducer, actions} = movieSlice;

const movieActions = {
    ...actions,
    getAllMovies,
    getPoster
}

export {
    movieActions,
    movieReducer
}