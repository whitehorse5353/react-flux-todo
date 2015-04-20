/** @jsx React.DOM */
var React = require('react');
var AppActions = require('../actions/actions');
var Store = require('../stores/store');

var EditComponent = React.createClass({
    getInitialState: function () {
        return Store.getStoreData();
    },
    updateItem: function (e) {
        var op = {
            itemText: e.target.value,
            index: this.props.itemIndex
        };
        AppActions.updateItemText(op);
    },
    handleFormSubmit: function () {
        AppActions.handleIndividualItemSubmit(this.props.itemIndex);
    },
    render: function () {
        return(<form action='javascript:void(0)' onSubmit={this.handleFormSubmit}>
            <input type='text' className='form-control' onChange={this.updateItem} onBlur={this.handleFormSubmit} autoFocus='autofocus' value={this.state.items[this.props.itemIndex].itemText} />
        </form>)
    }
});

module.exports = EditComponent;