import React from 'react';
import ItemTable from './ItemTable/ItemTable';
import ItemFormWrapper from './ItemForm/ItemFormWrapper';

class ItemManagement extends React.Component {
    constructor() {
        super();
        this.loadItemsFromServer = this.loadItemsFromServer.bind(this);
        this.handleFormChange = this.handleFormChange.bind(this);
        this.handleFormCancel = this.handleFormCancel.bind(this);
        this.handleItemSave = this.handleItemSave.bind(this);
        this.handleItemEdit = this.handleItemEdit.bind(this);
        this.handleItemDelete = this.handleItemDelete.bind(this);
        this.handleItemNew = this.handleItemNew.bind(this);
        this.state = {
            items: null,
            cur_item: null,
            num_pages: null,
            show_item_form: false,
            show_item_search: false
        }
    }
    componentDidMount() {
        this.loadItemsFromServer();
    }
    toFormData(obj, form, namespace) {
        let fd = form || new FormData();
        let formKey;
    
        for (let property in obj) {
            if (obj.hasOwnProperty(property) && obj[property]) {
                if (namespace) {
                    formKey = namespace + '[' + property + ']';
                } else {
                    formKey = property;
                }
    
                // if the property is an object, but not a File, use recursivity.
                if (obj[property] instanceof Date) {
                    fd.append(formKey, obj[property].toISOString());
                }
                else if (typeof obj[property] === 'object' && !(obj[property] instanceof File)) {
                    this.toFormData(obj[property], fd, formKey);
                } else { // if it's a string or a File object
                    fd.append(formKey, obj[property]);
                }
            }
        }
    
        return fd;
    }
    loadItemsFromServer(newPageNum, orderBy, orderDir) {

        fetch('/api/item', {
            method: 'GET'
        })
        .then((response) => response.json())
        .then((json) => {
            this.setState({
                items: json
            });
        }).catch((err) => {
            alert("There was a problem retrieving items from the server.")
        });
    }
    handleFormChange(updated_item) {
        this.setState({ cur_item: updated_item });
    }
    handleFormCancel() {
        this.setState({ show_item_form: false });
    }
    handleItemSave() {

        var isNewItem = (this.state.cur_item.id === undefined);
        fetch('/api/item/' + (isNewItem ? "" : this.state.cur_item.id), {
            method: (isNewItem ? "POST" : "PUT"),
            body: this.toFormData(this.state.cur_item)
        })
        .then((response) => {
            this.loadItemsFromServer();
        }).catch((err) => {
            alert("There was a problem saving the item.")
        });
    }
    handleItemEdit(item_to_edit) {

        // We need a detatched copy to prevent the form from updating before changes are saved
        var detatchedCopy = JSON.parse(JSON.stringify(item_to_edit));
        this.setState({
            cur_item: detatchedCopy,
            show_item_form: true
        });
    }
    handleItemDelete(item_to_delete) {
        var r = confirm("Are you sure you want to delete this item?");
        if (r == true) {
            
            fetch('/api/item/' + item_to_delete.id, {
                method: 'DELETE'
            })
            .then((response) => {
                this.loadItemsFromServer();
            }).catch((err) => {
                alert("There was a problem deleting the item.")
            });
        }
    }
    handleItemNew() {
        var empty_item = {};
        
        // Reset the form
        this.setState({
            cur_item: empty_item,
            show_item_form: true
        });
    }
    render() {
        let itemForm = (
            <ItemFormWrapper cur_item={this.state.cur_item}
                handleItemSave={this.handleItemSave}
                handleFormCancel={this.handleFormCancel}
                handleFormChange={this.handleFormChange} />
        );

        return (
            <div className="itemManagement">

                <h1>Items</h1>
                <button onClick={this.handleItemNew}>New</button>
                                
                <ItemTable items={this.state.items}
                    handleItemEdit={this.handleItemEdit}
                    handleItemDelete={this.handleItemDelete} />

                {this.state.show_item_form && itemForm}
            </div>
        );
    }
}
export default ItemManagement;