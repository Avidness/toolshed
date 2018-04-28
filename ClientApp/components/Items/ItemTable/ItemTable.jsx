import React from 'react';
import ItemRow from './ItemRow';

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
            <div>
                {itemRows}
            </div>
        );
    }
}
export default ItemTable;