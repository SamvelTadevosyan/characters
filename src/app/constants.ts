export const BASE_URL = '../../';
export const MAX_RETRIES = 6;

export const ENDPOINTS = {
  CHARACTERS_DATA: 'charactersData.json',
};

export const ACTORS_TAG = 'Characters';

export const TAG_TYPES = [ACTORS_TAG];

export const COLUMNS = [
  {
    id: 0,
    header: 'Name',
    selector: 'n',
    sortable: true,
    template: '',
  },
  {
    id: 1,
    header: 'Category',
    selector: 'c',
    sortable: true,
    template: '',
  },
  {
    id: 2,
    header: 'Actions',
    selector: '',
    sortable: false,
    template: '',
  },
];

export const SEVERITY_VARIANTS = ['success', 'info', 'warning'];
