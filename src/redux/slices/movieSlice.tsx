import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {IMovieResponse} from "../../interfaces";
import {movieService} from "../../services";
import {AxiosError} from "axios";
import {RootState} from "../store";

interface IState {
    movieData: IMovieResponse,
    // moviePoster: object
    page: number
}

const initialState: IState = {
    movieData: null,
    // moviePoster: null
    page: 1
}

const getAllMovies = createAsyncThunk<IMovieResponse, void>(
    'movieSlice/getAllMovies',
    async (_, {rejectWithValue, getState}) => {
        try {
            const {movies: {page}} = getState() as RootState;
            const {data} = await movieService.getAllMovies(page)
            console.log(data)
            return data
        } catch (e) {
            const err = e as AxiosError
            rejectWithValue(err.response.data)
        }
    }
)

// const setPoster = createAsyncThunk<object, string>(
//     'movieSlice/setPoster',
//     async (path, {rejectWithValue}) => {
//         try {
//             const {data} = await posterService.getPosterByPath(path)
//             return data
//         } catch (e) {
//             const err = e as AxiosError
//             rejectWithValue(err.response.data)
//         }
//     }
// )

const movieSlice = createSlice({
        name: 'movieSlice',
        initialState,
        reducers: {},
        extraReducers: builder => builder
            .addCase(getAllMovies.fulfilled, (state, action) => {
                state.movieData = action.payload
            })
        // .addCase(setPoster.fulfilled, (state, action) => {
        //     state.moviePoster = action.payload
        // })
    }
)

const {reducer: movieReducer, actions} = movieSlice;

const movieActions = {
    ...actions,
    getAllMovies,
    // setPoster
}

export {
    movieActions,
    movieReducer
}