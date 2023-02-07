import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {postRequest} from "../../api/requests/postRequest";

const initialState = {
    posts: [],
    selectedPost: null,
    errors: null,
    loading: null
};

const getAllPosts = createAsyncThunk(
    'postSlice/getAllPosts',
    async (_,{rejectedWithValue}) => {
        try {
          const {data} = await postRequest.getAll();
          return data
        } catch (e) {
            return rejectedWithValue(e.response.data)
        }
    }
)

const postSlice = createSlice({
    name: 'postSlice',
    initialState,
    reducers: {
        // getAll: (state, action) => {
        //     state.posts = action.payload
        // },
        getSelectedPost: (state, action) => {
            state.selectedPost = action.payload
        }
    },
    extraReducers: builder => {
        builder
            .addCase(getAllPosts.fulfilled, (state, action) => {
                state.loading = false
                state.posts = action.payload
            })
            .addCase(getAllPosts.rejected, (state, action) => {
                state.loading = false
                state.errors = action.payload
            })
            .addCase(getAllPosts.pending, state => {
                state.loading = true
            })
    }
});

const {reducer: postReducer, actions: {getSelectedPost}} = postSlice;

const postActions = {
    getAllPosts,
    getSelectedPost
};

export {postReducer, postActions};