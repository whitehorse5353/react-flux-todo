/** @jsx React.DOM */
var React = require('react');
var AppActions = require('../actions/actions');
var Store = require('../stores/store');
var ListComponent = require('./listComponent');
var ItemsLeftComponent = require('./itemsLeftComponent');
var ClearCompletedComponent = require('./clearCompletedComponent');
var RouteComponent = require('./routeComponent');

var App = React.createClass({
    getInitialState: function () {
        return Store.getStoreData();
    },
    updateLocalState: function () {
        this.setState(Store.getStoreData());
    },
    updateItem: function (e) {
        AppActions.updateItemState(e.target.value);
        this.updateLocalState();
    },
    handleFormSubmit: function () {
        AppActions.handleSubmit();
        this.updateLocalState();
    },
    render: function () {
        return (
            <div>
                <form action="javascript:void(0)" onSubmit={this.handleFormSubmit}>
                    <input type="input" ref='itemName' placeholder='what todo ?' className='form-control' onChange={this.updateItem} value={this.state.itemText} />
                </form>
                <ListComponent />
                <div className='status-bar row'>
                    <ItemsLeftComponent />
                    <RouteComponent />
                    <ClearCompletedComponent />
                </div>
            </div>
            )
    }
});
module.exports = App;