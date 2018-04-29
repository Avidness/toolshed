﻿import React from 'react';
import ItemRow from './ItemRow';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';

class ItemTable extends React.Component {
    render() {
        if (this.props.items == null) {
            return <div>Loading...</div>
        }

        var handleItemEdit = this.props.handleItemEdit;
        var handleItemDelete = this.props.handleItemDelete;
        var itemRows = this.props.items.map(function (item) {

            return (
                <ItemRow key={item.id} item={item}
                    handleItemEdit={handleItemEdit}
                    handleItemDelete={handleItemDelete} />
            );
        });
        return (
            // TODO: Add sorting
            <Paper>
            <Table>
                <TableHead>
                <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Description</TableCell>
                    <TableCell>Created At</TableCell>
                    <TableCell>Modified At</TableCell>
                    <TableCell>Edit</TableCell>
                    <TableCell>Delete</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                    {itemRows}
                </TableBody>
            </Table>
            </Paper>
        );
    }
}
export default ItemTable;