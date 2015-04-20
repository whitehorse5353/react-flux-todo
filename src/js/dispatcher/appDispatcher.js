var Dispatcher = require('flux/lib/Dispatcher');
var merge = require('react/lib/Object.assign');
var Dispatch = new Dispatcher();

var AppDispatcher = merge(Dispatch, {
    addItem: function (e) {
        this.globalDispatcher(e);
    },
    updateItem: function (e) {
        this.globalDispatcher(e);
    },
    handleSubmit: function (e) {
        this.globalDispatcher(e);
    },
    removeItem: function (e) {
        this.globalDispatcher(e);
    },
    editItem: function (e) {
        this.globalDispatcher(e);
    },
    updateItemText: function (e) {
        this.globalDispatcher(e);
    },
    handleIndividualItemSubmit: function (e) {
        this.globalDispatcher(e);
    },
    toggleItemState: function (e) {
        this.globalDispatcher(e);
    },
    clearCompletedItems: function (e) {
        this.globalDispatcher(e);
    },
    filterStates: function (e) {
        this.globalDispatcher(e);
    },
    globalDispatcher: function (e) {
        this.dispatch({
            actionType: e.typeOfAction,
            data: e.data
        });
    }
});
module.exports = AppDispatcher;