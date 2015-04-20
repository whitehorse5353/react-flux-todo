/** @jsx React.DOM */
var React = require('react');
var Store = require('../stores/store');

var ItemsLeftComponent = React.createClass({
    getInitialState: function () {
        return {count: Store.itemsLeft()};
    },
    updateLocalState: function () {
        this.setState({count: Store.itemsLeft()});
    },
    componentWillMount: function () {
        Store.addChangeListener(this.updateLocalState);
    },
    render: function () {
        var count = this.state.count;
        return( <div className='items-left col-xs-3'>{count ? <span> {count} items left</span> : null}</div>)
    }
});

module.exports = ItemsLeftComponent;