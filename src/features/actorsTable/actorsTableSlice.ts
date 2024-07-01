import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store'

interface ActorsTableState {
    actorsTable: any,
}

const initialState: ActorsTableState = {
    actorsTable: {},
}

export const actorsTableSlice = createSlice({
    name: 'actorsTable',
    initialState,
    reducers: {
        anyReducer: initialState => initialState,
    },
})

export const {  } = actorsTableSlice.actions

export const actorsTable = (state: RootState) => state.actorsTable.value

export default actorsTableSlice.reducer
