import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {userRequest} from "../../api";

const initialState = {
    users: [],
    selectedUser: null,
    errors: null,
    loading: null
};

const getAll = createAsyncThunk(
    'userSlice/getAll',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await userRequest.getAll();
            return data;
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
)

const getById = createAsyncThunk(
    'userSlice/GetById',
    async ({id},{rejectedWithValue}) => {
        try {
            const {data} = await userRequest.getById(id);
            return data
        } catch (e) {
            return rejectedWithValue(e.response.data)
        }
    }
)

const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {
        // getAll: (state, action) => {
        //     state.users = action.payload
        // },
        getSelectedUser: (state, action) => {
            state.selectedUser = action.payload
        }
    },
    // extraReducers: {
    //     [getAll.fulfilled]: (state, action) => {
    //         state.loading = false
    //         state.users = action.payload
    //     },
    //     [getAll.rejected]: (state, action) => {
    //         state.loading = false
    //         state.errors = action.payload
    //     },
    //     [getAll.pending]: (state) => {
    //         state.loading = true
    //     }
    // }
    extraReducers: builder => {
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.loading = false
                state.users = action.payload
            })
            .addCase(getAll.rejected, (state, action) => {
                state.loading = false
                state.errors = action.payload
            })
            .addCase(getAll.pending, (state) => {
                state.loading = true
            })
            .addCase(getById.fulfilled, (state, action) => {
                state.loading = false
                state.selectedUser = action.payload
            })
    }
});

const {reducer: userReducer ,actions: {getSelectedUser}} = userSlice;

const userActions = {
    getSelectedUser,
    getById,
    getAll
};

export  {
    userReducer,
    userActions
}