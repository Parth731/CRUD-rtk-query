import { configureStore } from "@reduxjs/toolkit";
import { studentsApi } from "../services/student";

export const store = configureStore({
  reducer: {
    [studentsApi.reducerPath]: studentsApi.reducer,
  },
  middleware: (gDM) => gDM().concat(studentsApi.middleware),
});
