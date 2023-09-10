import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {IGenre} from "../../interfaces";
import {AxiosError} from "axios";
import {genreService} from "../../services";

interface IState {
    genres: IGenre[]
}

const initialState: IState = {
    genres: []
};

const getGenres = createAsyncThunk(
    'genreSlice/getGenres',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await genreService.getAll()
            return data
        } catch (e) {
            const err = e as AxiosError
            rejectWithValue(err.response.data)
        }
    }
)

const genreSlice = createSlice({
        name: 'genreSlice',
        initialState,
        reducers: {},
        extraReducers: builder =>
            builder
                .addCase(getGenres.fulfilled, (state, action) => {
                    state.genres = action.payload.genres
                })


    }
)

const {reducer: genreReducer, actions} = genreSlice;

const genreActions = {
    ...actions,
    getGenres
}

export {
    genreReducer,
    genreActions
}