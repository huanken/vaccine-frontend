import {createSelector} from "@reduxjs/toolkit"

/** Selector **/
const injectionSelector = (state) => state.injection; 

const selectListInjectionSelector = createSelector(
    injectionSelector,
    state => state.injections )
const selectPageSelector = createSelector(
    injectionSelector,
    state => state.page);

const selectSizeSelector = createSelector(
    injectionSelector,
    state => state.size);

const selectTotalElementSelector = createSelector(
    injectionSelector ,
    state => state.totalElement);

const selectSearchSelector = createSelector(
    injectionSelector ,
    state => state.search);

const selectLoadingSelector = createSelector(
    injectionSelector ,
    state => state.isLoading);

const selectSelectedRowsSelector = createSelector(
    injectionSelector ,
    state => state.selectedRows);

const selectSortFieldSelector = createSelector(
    injectionSelector ,
    state => state.sortField);

const selectSortTypeSelector = createSelector(
    injectionSelector ,
    state => state.sortType);

export const selectListInjection = (state) => {
    return selectListInjectionSelector(state);
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



