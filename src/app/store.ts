import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import { actorsTableSlice } from '../features/actorsTable/actorsTableSlice'

const store = configureStore({
    reducer: {
        actorsData: actorsTableSlice.reducer,
    },
})
export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()

export default store