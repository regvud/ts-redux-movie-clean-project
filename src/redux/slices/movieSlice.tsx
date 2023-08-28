import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {IMovieResponse} from "../../interfaces";
import {movieService} from "../../services";
import {AxiosError} from "axios";

interface IState {
    movieData: IMovieResponse
}

const initialState: IState = {
    movieData: null
}

const getAllMovies = createAsyncThunk<IMovieResponse, void>(
    'movieSlice/getAllMovies',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getAllMovies()
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
            })
    }
)

const {reducer: movieReducer, actions} = movieSlice;

const movieActions = {
    ...actions,
    getAllMovies
}

export {
    movieActions,
    movieReducer
}