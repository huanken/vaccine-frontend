import { createSelector } from "@reduxjs/toolkit";

/** Selector **/
const vaccineSelector = (state) => state.vaccine;

const selectListVaccineSelector = createSelector(
    vaccineSelector,
    state => state.vaccines);

const selectPageSelector = createSelector(
    vaccineSelector,
    state => state.page);

const selectSizeSelector = createSelector(
    vaccineSelector,
    state => state.size);

const selectTotalElementSelector = createSelector(
    vaccineSelector,
    state => state.totalElement);

const selectSearchSelector = createSelector(
    vaccineSelector,
    state => state.search);

const selectSelectedRowsSelector = createSelector(
    vaccineSelector,
    state => state.selectedRows);

const selectSortFieldSelector = createSelector(
    vaccineSelector,
    state => state.sortField);

const selectSortTypeSelector = createSelector(
    vaccineSelector,
    state => state.sortType);

/** function */
export const selectListVaccine = (state) => {
    return selectListVaccineSelector(state);
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

export const selectSortField = (state) => {
    return selectSortFieldSelector(state);
}

export const selectSortType = (state) => {
    return selectSortTypeSelector(state);
}
