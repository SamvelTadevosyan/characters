import { createEntityAdapter } from '@reduxjs/toolkit'

import { api } from './api'

import type { CharacterType } from '../../types';

import { TAG_TYPES, ENDPOINTS } from "../constants";

export const extendedCharactersSlice = api.injectEndpoints({
    reducerPath: 'charactersApi',
    endpoints: (build) => ({
        getCharacters: build.query<CharacterType, void>({
            query: () => ENDPOINTS.ACTORS_DATA,
            providesTags: TAG_TYPES,
        }),
    }),
})

export const updateActor = (actor: Partial<CharacterType>)  => {
    return extendedCharactersSlice.util.updateQueryData(
        "getCharacters",
        undefined,
        (draftState, args) => void(draftState.map(stateItem => {
            if (stateItem.id === actor.id)
                stateItem.n = actor.n
        }))
    );
}

export const deleteActor = (id: number)  => {
    return extendedCharactersSlice.util.updateQueryData(
        "getCharacters",
        undefined,
        (draftState) =>  draftState.filter(stateItem => stateItem.id !== id)
    );
}

export const {
    useGetCharactersQuery,
} = extendedCharactersSlice

