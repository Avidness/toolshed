import React from 'react';
import ItemDetailsWrapper from '../ItemDisplay/ItemDetailsWrapper';

class ItemRow extends React.Component {
    constructor() {
        super()
        this.handleEdit = this.handleEdit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.toggleDetails = this.toggleDetails.bind(this);
        this.state = {
            showDetails: false
        }
    }
    toggleDetails() {
        this.setState({ showDetails: !this.state.showDetails });
    }
    handleEdit(e) {
        e.preventDefault();
        this.props.handleItemEdit(this.props.item);
    }
    handleDelete(e) {
        e.preventDefault();
        this.props.handleItemDelete(this.props.item);
    }
    render() {
        return (
            <div>
                <div onClick={this.toggleDetails}>
                    {this.props.item.label}
                    {this.props.item.description}
                    {this.props.item.lastModifiedAt}
                    {this.props.item.createdAt}
                </div>
                <button onClick={this.handleEdit.bind(this)}>Edit</button>
                <button onClick={this.handleDelete}>Delete</button>

                {this.state.showDetails ?
                    <ItemDetailsWrapper item={this.props.item} />
                    : null
                }
            </div>
        );
    }
}
export default ItemRow;