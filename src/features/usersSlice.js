import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();
  return users;
});

const usersSlice = createSlice({
  name: "users",
  initialState: {
    entities: [],
    loading: false,
    modal: false,
    isLogin:false,
    username:"",
    isSignup:false
  },
  reducers: {
    userAdded(state, action) {
      state.entities.push(action.payload);
    },
    userUpdated(state, action) {
      const { id, name, email } = action.payload;
      const existingUser = state.entities.find((user) => user.id === id);
      if (existingUser) {
        existingUser.name = name;
        existingUser.email = email;
      }
    },
    userDeleted(state, action) {
      const { id } = action.payload;
      const existingUser = state.entities.find((user) => user.id === id);
      if (existingUser) {
        state.entities = state.entities.filter((user) => user.id !== id);
      }
    },

    userDetails(state, action) {
      const { id } = action.payload;
      const existingUser = state.entities.find((user) => user.id === id);
      if (existingUser) {
        state.entities = state.entities.filter((user) => user.id === id);
      }
    },
    modalClosed(state,action){
      state.modal = false;
    },
    modalOpen(state,action){
      state.modal= true;
    },
    loggedin(state,action){
      state.isLogin= true;
    },
    loggedout(state,action){
      state.isLogin=false;
    },
    signedup(state,action){
      state.isSignup=true;
    }


  },
  extraReducers: {
    [fetchUsers.pending]: (state, action) => {
      state.loading = true;
    },
    [fetchUsers.fulfilled]: (state, action) => {
      state.loading = false;
      state.entities = [...state.entities, ...action.payload];
    },
    [fetchUsers.rejected]: (state, action) => {
      state.loading = false;
    },
  },
});

export const { userAdded, userUpdated, userDeleted, userDetails,modalOpen,modalClosed,loggedin,loggedout,signedup } = usersSlice.actions;

export default usersSlice.reducer;
