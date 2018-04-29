import React from 'react';
import ItemDetailsWrapper from '../ItemDisplay/ItemDetailsWrapper';
import Button from 'material-ui/Button';
import { TableCell, TableRow } from 'material-ui/Table';

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
            <TableRow>
                <TableCell onClick={this.toggleDetails}>{this.props.item.label}</TableCell>
                <TableCell onClick={this.toggleDetails}>{this.props.item.description}</TableCell>
                <TableCell onClick={this.toggleDetails}>{this.props.item.lastModifiedAt}</TableCell>
                <TableCell onClick={this.toggleDetails}>{this.props.item.createdAt}</TableCell>
                
                <TableCell>
                    <Button onClick={this.handleEdit.bind(this)}>Edit</Button>
                </TableCell>

                <TableCell>
                    <Button onClick={this.handleDelete}>Delete</Button>
                </TableCell>

                {this.state.showDetails ?
                    <ItemDetailsWrapper item={this.props.item} />
                    : null
                }
            </TableRow>
        );
    }
}
export default ItemRow;