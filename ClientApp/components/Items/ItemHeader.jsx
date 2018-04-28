import React from 'react';

class ItemHeader extends React.Component {
    constructor(){
        super();
        this.handleItemNew = this.handleItemNew.bind(this);
    }
    handleItemNew(e) {
        e.preventDefault();
        this.props.handleItemNew(e);
    }
    render() {
        return (
            <span className="itemManagementHeader">
                <h1 className="pull-left">Items</h1>
                <button type="button" title="Add new item"
                    className="btn btn-success fa fa-plus"
                    onClick={this.handleItemNew}>
                    New
                </button>
            </span>
        );
    }
}
export default ItemHeader;