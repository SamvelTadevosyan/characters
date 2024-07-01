import React from 'react'

import { useAppSelector, useAppDispatch } from '../../app/hooks'

// dispatchers
import {  } from './actorsTableSlice'

export default function ActorsTable() {
    const tableData = useAppSelector((state) => state.actorsData.actorsTable)
    const dispatch = useAppDispatch()

    return (
        <>
            ActorsTable
        </>
    )
}