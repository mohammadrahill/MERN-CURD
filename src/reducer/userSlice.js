import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const allUser = createAsyncThunk("user", async () => {
    const response = await fetch('');
    const result = response.json()
    return result;
});

console.log(allUser);

export const user = createSlice({
    name: 'user',
    initialState: {
        user: [],
        loading: false,
        error: null,
    },
    extraReducers: (builder) =>  {
        builder.addCase(allUser.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(allUser.fulfilled, (state, action) => {
            state.loading = false;
            state.user = action.payload;
        })
        builder.addCase(allUser.rejected,(state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
    }
});

export default user.reducer;