import { createSelector } from "@reduxjs/toolkit";

/** Selector **/
const userSelector = (state) => state.user;

const selectListUserSelector = createSelector(
    userSelector,
    state => state.users);

const selectPageSelector = createSelector(
    userSelector,
    state => state.page);

const selectSizeSelector = createSelector(
    userSelector,
    state => state.size);

const selectTotalElementSelector = createSelector(
    userSelector,
    state => state.totalElement);

const selectSearchSelector = createSelector(
    userSelector,
    state => state.search);

const selectLoadingSelector = createSelector(
    userSelector,
    state => state.isLoading);

const selectSelectedRowsSelector = createSelector(
    userSelector,
    state => state.selectedRows);

const selectSortFieldSelector = createSelector(
    userSelector,
    state => state.sortField);

const selectSortTypeSelector = createSelector(
    userSelector,
    state => state.sortType);

/** function */
export const selectListUser = (state) => {
    return selectListUserSelector(state);
}

export const selectPage = (state) => {
    return selectPageSelector(state);
}

export const selectSize = (state) => {
    return selectSizeSelector(state);
}

export const selectTotalElement = (state) => {
    return selectTotalElementSelector(state);
}


export const selectSearch = (state) => {
    return selectSearchSelector(state);
}

export const selectSelectedRows = (state) => {
    return selectSelectedRowsSelector(state);
}

export const selectLoading = (state) => {
    return selectLoadingSelector(state);
}

export const selectSortField = (state) => {
    return selectSortFieldSelector(state);
}

export const selectSortType = (state) => {
    return selectSortTypeSelector(state);
}
