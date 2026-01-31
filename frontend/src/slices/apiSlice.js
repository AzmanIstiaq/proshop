import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../constants";
import { logout } from "./authSlice";

const rawBaseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
  credentials: "include",
});

// Wrap base query so we can react to expired/invalid auth cookies globally.
const baseQuery = async (args, api, extraOptions) => {
  const result = await rawBaseQuery(args, api, extraOptions);

  // If the backend signals auth failure, clear stale client state and force re-login.
  if (result?.error && [401, 403].includes(result.error.status)) {
    api.dispatch(logout());
    // Use location replace to avoid back-button looping.
    window.location.replace("/login");
  }

  return result;
};

export const apiSlice = createApi({
  baseQuery,
  tagTypes: ["Product", "User", "Order"],
  endpoints: (builder) => ({}),
});
