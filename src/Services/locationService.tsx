import { AppDispatch } from "../redux/store";
import {
  locationFailure,
  locationRequest,
  locationSuccess,
} from "../redux/reducers/locationreducer";

type Coordinates = {
  latitude: number;
  longitude: number;
};

export const fetchCurrentLocation =
  (coords: Coordinates) => async (dispatch: AppDispatch) => {
    dispatch(locationRequest());

    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${coords.latitude}&lon=${coords.longitude}`
      );
      const data = await response.json();

      dispatch(locationSuccess(data.display_name)); // Ensure it's a string
    } catch (error) {
      console.error("Error fetching current location:", error);
      dispatch(locationFailure(error));
    }
  };
