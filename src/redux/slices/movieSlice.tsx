import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IMovieResponse} from "../../interfaces";
import {movieService} from "../../services";
import {AxiosError} from "axios";

interface IState {
    movieData: IMovieResponse,
    // moviePoster: object
    page: number
    total_pages: number
}

const initialState: IState = {
    movieData: null,
    // moviePoster: null
    page: 1,
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
        reducers: {
            incrementPage: (state) => {
                state.page++
            },
            decrementPage: (state) => {
                state.page--
            }
        },
        extraReducers: builder => builder
            .addCase(getAllMovies.fulfilled, (state, action) => {
                state.movieData = action.payload
                state.total_pages = action.payload.total_pages
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