/** @jsx React.DOM */
var React = require('react');
var AppActions = require('../actions/actions');
var Store = require('../stores/store');
var RouterComponent = require('./RouterComponent');

var ListComponent = React.createClass({
    getInitialState: function () {
        return Store.getStoreData();
    },
    updateLocalStore: function () {
        this.setState(Store.getStoreData());
    },
    componentWillMount: function () {
        Store.addChangeListener(this.updateLocalStore);
    },
    componentWillUnmount: function () {
        Store.removeChangeListener(this.updateLocalStore);
    },
    render: function () {
        var item = this.state.items.map(function (item, index) {
            return <RouterComponent itemIndex={index} itemText={item} />;
        });
        return(<div className='todo-wrapper container'>
            <ul className='list-unstyled table table-condensed'>
                    {item}
            </ul>
        </div>)
    }
});

module.exports = ListComponent;