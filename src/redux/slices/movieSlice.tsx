import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {IMovieResponse} from "../../interfaces";
import {movieService} from "../../services";
import {AxiosError} from "axios";
import {posterService} from "../../services/posterService";

interface IState {
    movieData: IMovieResponse,
    moviePosters: string[]
}

const initialState: IState = {
    movieData: null,
    moviePosters: []
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

// const setPoster = createAsyncThunk<any, string>(
//     'movieSlice/setPoster',
//     async (path, {rejectWithValue}) => {
//         try {
//             return await posterService.getPosterByPath(path)
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
    //         .addCase(setPoster.fulfilled, (state, action) => {
    //             state.moviePosters = action.payload
    //         })
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