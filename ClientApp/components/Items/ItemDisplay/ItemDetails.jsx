import React from 'react';

class ItemDetails extends React.Component {
    render() {
        return (
            <div className="demographicDetails">
                <p><strong>Name: </strong>{this.props.item.label}</p>
                <p><strong>Description: </strong>{this.props.item.description}</p>
                <p><strong>Created At: </strong>{this.props.item.createdAt}</p>
                <p><strong>Last Modified At: </strong>{this.props.item.lastModifiedAt}</p>
            </div>
        );
    }
}
export default ItemDetails;