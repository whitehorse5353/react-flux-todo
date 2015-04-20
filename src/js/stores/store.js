var AppDispatcher = require('../dispatcher/appDispatcher');
var merge = require('react/lib/Object.assign');
var EventEmitter = require('events').EventEmitter;
var EvtEmitter = new EventEmitter();
var AppConstants = require('../constants/constants');

var itemStore = {
    items: [],
    itemText: '',
    route: 'all'
};

var Store = merge(EvtEmitter, {
    emitChanges: function () {
        this.emit(AppConstants.CHANGE);
    },
    addChangeListener: function (callback) {
        this.on(AppConstants.CHANGE, callback);
    },
    removeChangeListener: function (callback) {
        this.removeListener(AppConstants.CHANGE, callback);
    },
    getStoreData: function () {
        return itemStore;
    },
    setItemText: function (e) {
        itemStore.itemText = e.data;
    },
    addNewItem: function () {
        var op = {};
        if (itemStore.itemText) {
            op['itemText'] = itemStore.itemText;
            op['editMode'] = false;
            op['isActive'] = true;
            itemStore.items.push(op);
            itemStore.itemText = '';
        }
    },
    removeItem: function (e) {
        itemStore.items.splice(e.data, 1);
    },
    editItem: function (e) {
        itemStore.items[e.data].editMode = true;
    },
    editItemText: function (e) {
        itemStore.items[e.data.index].itemText = e.data.itemText;
    },
    handleIndividualItemSubmit: function (e) {
        itemStore.items[e.data].editMode = false;
    },
    toggleItemState: function (e) {
        itemStore.items[e.data.index].isActive = !itemStore.items[e.data.index].isActive;
    },
    itemsLeft: function () {
        if (itemStore.items.length) {
            var count = 0;
            itemStore.items.map(function (item) {
                item.isActive ? count++ : 0;
            });
            return count;
        }
    },
    clearCompletedItems: function () {
        var op = itemStore.items.filter(function (item) {
            if (item.isActive) {
                return item;
            }
        });
        itemStore.items = op;
    },
    getCompletedItems: function () {
        if (itemStore.items.length) {
            var count = 0;
            itemStore.items.map(function (item) {
                !item.isActive ? count++ : 0;
            });
            return count;
        }
        return null;
    },
    filterStates: function (e) {
        itemStore['route'] = e.data;
    }
});


AppDispatcher.register(function (pl) {
    if (pl.actionType === AppConstants.UPDATE_ITEM_TEXT) {
        Store.setItemText(pl);
    } else if (pl.actionType === AppConstants.HANDLE_SUBMIT) {
        Store.addNewItem(pl);
    } else if (pl.actionType === AppConstants.REMOVE_ITEM) {
        Store.removeItem(pl);
    } else if (pl.actionType === AppConstants.EDIT_ITEM) {
        Store.editItem(pl);
    } else if (pl.actionType === AppConstants.EDIT_ITEM_TEXT) {
        Store.editItemText(pl);
    } else if (pl.actionType === AppConstants.HANDLE_INDIVIDUAL_ITEM_SUBMIT) {
        Store.handleIndividualItemSubmit(pl);
    } else if (pl.actionType === AppConstants.TOGGLE_ITEM_STATE) {
        Store.toggleItemState(pl);
    } else if (pl.actionType === AppConstants.CLEAR_COMPLETED_ITEMS) {
        Store.clearCompletedItems(pl);
    } else if (pl.actionType === AppConstants.FILTER_ROUTES) {
        Store.filterStates(pl);
    }

    Store.emitChanges();

    return true;
});

module.exports = Store;