/** @jsx React.DOM */
var React = require('react');
var AppActions = require('../actions/actions');
var Store = require('../stores/store');

var RegularView = React.createClass({
    getInitialState: function () {
        return Store.getStoreData();
    },
    removeItem: function () {
        AppActions.removeItem(this.props.itemIndex);
    },
    toggleItemState: function (e) {
        var op = {
            itemState: e.target.checked,
            index: this.props.itemIndex
        };
        AppActions.toggleItemState(op);
    },
    render: function () {
        return(<div>
            <input type='checkbox' checked={!this.props.itemScope.isActive ? 'checked' : null} onChange={this.toggleItemState} />
            {this.props.itemScope.isActive ? <span> {this.props.itemScope.itemText} </span> : <del> {this.props.itemScope.itemText} </del> }
            <button type='button' onClick={this.removeItem} className='close' aria-label='Close'>
                <span aria-hidden='true'>&times;</span>
            </button>
        </div>)
    }
});

module.exports = RegularView;