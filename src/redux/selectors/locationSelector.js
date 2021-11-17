import { createSelector } from "@reduxjs/toolkit";

/** Selector **/
const locationSelector = (state) => state.location;

const selectListLocationSelector = createSelector(
    locationSelector,
    state => state.locations);

const selectPageSelector = createSelector(
    locationSelector,
    state => state.page);

const selectSizeSelector = createSelector(
    locationSelector,
    state => state.size);

const selectTotalElementSelector = createSelector(
    locationSelector,
    state => state.totalElement);

const selectSearchSelector = createSelector(
    locationSelector,
    state => state.search);

const selectLoadingSelector = createSelector(
    locationSelector,
    state => state.isLoading);

const selectSelectedRowsSelector = createSelector(
    locationSelector,
    state => state.selectedRows);

const selectSortFieldSelector = createSelector(
    locationSelector,
    state => state.sortField);

const selectSortTypeSelector = createSelector(
    locationSelector,
    state => state.sortType);

/** function */
export const selectListLocation = (state) => {
    return selectListLocationSelector(state);
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
