import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import API from '../API/api';
import { toast } from 'react-toastify';

const initialState = {


    user: null,
    error: null,
    loading: null
}




export const signUpFunction = createAsyncThunk("/auth/signup", async ({ formData, navigate, toast }, { rejectWithValue }) => {

    try {


        const response = await API.post("/auth/signup", formData);
        console.log(response);

        if (response.data.success) {

            toast.success(response.data.message);
            navigate('/login')

        }
        return;




    } catch (error) {

        console.log(error);
        return rejectWithValue(error.response.data.message);

    }
})


export const loginFunction = createAsyncThunk("auth/login", async ({ formData, navigate, toast }, { rejectWithValue }) => {


    try {

        const response = await API.post("/auth/login", formData);
        console.log(response);

        if (!response.data.success)
            return;

        const { data } = await API.get("/auth/getUser");


        if (data.success) {

            localStorage.setItem("userData", JSON.stringify(data.userData.rows[0]));
            toast.success(response.data.message);
            navigate('/')
        }

        return;

    } catch (error) {

        console.log(error);
        return rejectWithValue(error.response.data.message);

    }
})

export const logoutFunction = createAsyncThunk("auth/logout", async (_, { rejectWithValue }) => {


    try {
        const response = await API.post("/auth/logout");

        if (response.data.success) {

            localStorage.removeItem("userData");
            toast.success(response.data.message);

        }
        else
            toast.error(response.data.message);

        return;

    } catch (error) {

        console.log(error);
        return rejectWithValue(error.response.data.message);

    }

})

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {


        setUser: (state, action) => {

            state.user = action.payload
        }


    },
    extraReducers: (builder) => {
        builder
            .addCase(signUpFunction.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(signUpFunction.fulfilled, (state, action) => {
                // You can add your logic here
                state.loading = false;
                state.error = false;
                console.log(action.payload);

            })
            .addCase(signUpFunction.rejected, (state, action) => {
                state.loading = false;
                // state.error = action.payload;

                console.log(action.payload);
            })
            .addCase(loginFunction.pending, (state, action) => {

                state.loading = true
            }).addCase(loginFunction.fulfilled, (state, action) => {

                console.log(action.payload);
                state.loading = false;
                state.error = false;
                state.user = JSON.parse(localStorage.getItem("userData"));
            }).addCase(loginFunction.rejected, (state, action) => {
                console.log(action.payload);
                state.error = action.payload;
                state.loading = false
            }).addCase(logoutFunction.fulfilled, (state, action) => {
                console.log(action.payload);
                state.error = null;
                state.loading = false;
                state.user = null;
            }).addCase(logoutFunction.pending, (state, action) => {
                console.log(action.payload);
                state.loading = true;
                state.error = null;

            }).addCase(logoutFunction.rejected, (state, action) => {
                console.log(action.payload);
                state.error = action.payload;
                state.loading = false;
            });
    },
});
export const { setUser } = authSlice.actions;
export default authSlice.reducer