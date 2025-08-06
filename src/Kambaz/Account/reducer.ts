import { createSlice } from "@reduxjs/toolkit";

interface User {
  _id: string;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  role: string;
}

interface AccountState {
  currentUser: User | null;
}

const initialState: AccountState = {
  currentUser: null,
};

const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
    },
  },
});

export const { setCurrentUser } = accountSlice.actions;
export default accountSlice.reducer;