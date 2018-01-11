import { createAction } from 'redux-actions';

import ActionTypes from 'constants/action-types';

export const changeSearchString = createAction(
    ActionTypes.CHANGE_REPOSITORIES_SEARCH_STRING,
    searchString => ({
        searchString,
    }),
);
