import { configureStore } from "@reduxjs/toolkit";

import user from "./UserSlice";

export const store = configureStore({
    reducer: {
        user
    }
})