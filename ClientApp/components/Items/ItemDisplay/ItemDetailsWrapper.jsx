import React from 'react';
import ItemDetails from './ItemDetails';

class ItemDetailsWrapper extends React.Component {
    render() {
        let id = this.props.item.Id;

        return (
            <div className="itemDetails">
                <ItemDetails item={this.props.item} />
            </div>
        );
    }
}
export default ItemDetailsWrapper;