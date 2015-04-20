/** @jsx React.DOM */
var React = require('react');
var Store = require('../stores/store');
var AppActions = require('../actions/actions');

var ClearCompletedComponent = React.createClass({
    getInitialState: function () {
        return {count: Store.getCompletedItems()};
    },
    updateLocalState: function () {
        this.setState({count: Store.getCompletedItems()});
    },
    componentWillMount: function () {
        Store.addChangeListener(this.updateLocalState);
    },
    clearCompletedItems: function () {
        AppActions.clearCompletedItems();
    },
    render: function () {
        return (<span>{this.state.count ? <a href='javascript:void(0)' onClick={this.clearCompletedItems}> {this.state.count} Clear Completed</a> : null}</span>)
    }
});

module.exports = ClearCompletedComponent;