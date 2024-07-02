import { configureStore } from '@reduxjs/toolkit'
import { api } from './services/api'
import { useDispatch } from 'react-redux'

export const store = configureStore({
    reducer: {
        // Add the generated reducer as a specific top-level slice
        [api.reducerPath]: api.reducer,
    },
    // Adding the api middleware enables caching, invalidation, polling,
    // and other useful features of `rtk-query`.
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware),
})
console.log('store :::', store.getState())

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()

export default store