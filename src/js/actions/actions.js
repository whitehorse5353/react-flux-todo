var React = require('react');
var AppDispatcher = require('../dispatcher/appDispatcher');
var AppConstants = require('../constants/constants');

var AppActions = {
    addItem: function (e) {
        AppDispatcher.addItem({
            typeOfAction: AppConstants.ADD_ITEM,
            data: e
        });
    },
    updateItemState: function (e) {
        AppDispatcher.updateItem({
            typeOfAction: AppConstants.UPDATE_ITEM_TEXT,
            data: e
        });
    },
    handleSubmit: function (e) {
        AppDispatcher.handleSubmit({
            typeOfAction: AppConstants.HANDLE_SUBMIT,
            data: e
        });
    },
    removeItem: function (e) {
        AppDispatcher.removeItem({
            typeOfAction: AppConstants.REMOVE_ITEM,
            data: e
        });
    },
    editItem: function (e) {
        AppDispatcher.editItem({
            typeOfAction: AppConstants.EDIT_ITEM,
            data: e
        });
    },
    updateItemText: function (e) {
        AppDispatcher.updateItemText({
            typeOfAction: AppConstants.EDIT_ITEM_TEXT,
            data: e
        });
    },
    handleIndividualItemSubmit: function (e) {
        AppDispatcher.handleIndividualItemSubmit({
            typeOfAction: AppConstants.HANDLE_INDIVIDUAL_ITEM_SUBMIT,
            data: e
        });
    },
    toggleItemState: function (e) {
        AppDispatcher.toggleItemState({
            typeOfAction: AppConstants.TOGGLE_ITEM_STATE,
            data: e
        });
    },
    clearCompletedItems: function (e) {
        AppDispatcher.clearCompletedItems({
            typeOfAction: AppConstants.CLEAR_COMPLETED_ITEMS,
            data: e
        });
    },
    filterStates: function(e){
        AppDispatcher.filterStates({
            typeOfAction: AppConstants.FILTER_ROUTES,
            data: e
        });
    }
};

module.exports = AppActions;