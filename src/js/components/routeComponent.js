/** @jsx React.DOM */
var React = require('react');
var AppActions = require('../actions/actions');
var Store = require('../stores/store');

var RouteComponent = React.createClass({
    getInitialState: function () {
        return Store.getStoreData();
    },
    filterStates: function (e) {
        AppActions.filterStates(e.target.id)
    },
    render: function () {
        return(<span>
            {this.state.items.length ? <ul className='list-inline col-xs-5'>
                <li>
                    <a href='javascript:void(0)' onClick={this.filterStates} id='all'>All</a>
                </li>
                <li>
                    <a href='javascript:void(0)' onClick={this.filterStates} id='active'>Active</a>
                </li>
                <li>
                    <a href='javascript:void(0)' onClick={this.filterStates} id='completed'>Completed</a>
                </li>
            </ul> : null}</span>)
    }
});

module.exports = RouteComponent;