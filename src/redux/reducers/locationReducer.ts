import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface LocationState {
  loading: boolean;
  location: string;
  error: object;
}

const initialState: LocationState = {
  loading: false,
  location: "",
  error: {},
};

const locationSlice = createSlice({
  name: "location",
  initialState,
  reducers: {
    locationRequest: (state) => {
      state.loading = true;
    },
    locationSuccess: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.location = action.payload; // Ensure location is a string
    },
    // locationFailure: (state: PayloadAction<string>) => {
    //   state.loading = false;
    //   state.error = {};
    // },
    locationFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload.error;
    },
  },
});

export const { locationRequest, locationSuccess, locationFailure } =
  locationSlice.actions;

export default locationSlice.reducer;
