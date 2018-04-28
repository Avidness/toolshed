import React from 'react';
import ItemForm from './ItemForm';

class ItemFormWrapper extends React.Component {

    constructor() {
        super()
        this.handleSave = this.handleSave.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.state = {
            loaded: false
        }
    }
    handleSave(e) {
        e.preventDefault();
        this.props.handleItemSave(e);
    }
    handleCancel(e) {
        e.preventDefault();
        this.props.handleFormCancel();
    }
    render() {

        if (this.props.cur_item == null) 
            return null;

        let id = this.props.cur_item.Id;

        return (
            <form id="itemForm" onSubmit={this.handleSave}>
                <ItemForm cur_item={this.props.cur_item}
                    handleFormChange={this.props.handleFormChange} />
                
                <button type="button" className="btn btn-default" onClick={this.handleCancel}>Cancel</button>
                <button type="Submit" className="btn btn-primary">Save</button>
            </form>
        );
    }
}
export default ItemFormWrapper;