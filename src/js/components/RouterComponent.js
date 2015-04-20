/** @jsx React.DOM */
var React = require('react');
var AppActions = require('../actions/actions');
var Store = require('../stores/store');
var EditComponent = require('./editComponent');
var RegularView = require('./regularView');

var RouterComponent = React.createClass({
    getInitialState: function () {
        return Store.getStoreData();
    },
    routeFiltering: function (route, state) {
        if (route === 'all') {
            return true;
        } else if (route === 'active' && state) {
            return true;
        } else if (route === 'completed' && !state) {
            return true;
        }
    },
    enableEditItem: function () {
        var EditIndex = this.refs.itemIndex.getDOMNode().id;
        AppActions.editItem(EditIndex);
    },
    render: function () {
        var layout = <li ref='itemIndex' id={this.props.itemIndex} onDoubleClick={this.enableEditItem} >
        {this.state.items[this.props.itemIndex].editMode ?
            <EditComponent itemScope={this.state.items[this.props.itemIndex]} itemIndex={this.props.itemIndex} />
            : <RegularView itemScope={this.state.items[this.props.itemIndex]} itemIndex={this.props.itemIndex} />}
        </li>;
        return(<span>{this.routeFiltering(this.state.route, this.state.items[this.props.itemIndex].isActive) ? layout : null}</span>)

    }
});

module.exports = RouterComponent;