import { api } from './api';
import { TAG_TYPES, ENDPOINTS } from '../constants';

import type { CharacterType } from '../../types';

export const extendedCharactersSlice = api.injectEndpoints({
  reducerPath: 'charactersApi',
  endpoints: (build) => ({
    getCharacters: build.query<CharacterType, void>({
      query: () => ENDPOINTS.CHARACTERS_DATA,
      providesTags: TAG_TYPES,
    }),
  }),
});

export const updateCharacter = (character: Partial<CharacterType>) => {
  return extendedCharactersSlice.util.updateQueryData(
    'getCharacters',
    undefined,
    (draftState, args) =>
      void draftState.map((stateItem) => {
        if (stateItem.id === character.id) {
          stateItem.n = character.n;
          stateItem.c = character.c;
        }
      }),
  );
};

export const deleteCharacter = (id: number) => {
  return extendedCharactersSlice.util.updateQueryData('getCharacters', undefined, (draftState) =>
    draftState.filter((stateItem) => stateItem.id !== id),
  );
};

export const { useGetCharactersQuery } = extendedCharactersSlice;
