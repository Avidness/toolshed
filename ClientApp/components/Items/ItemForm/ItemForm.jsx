import React from 'react';
import FormInput from '../../Helpers/FormInput';
import FormSelection from '../../Helpers/FormSelection';

class ItemForm extends React.Component {
    constructor(){
        super();
        this.handleFormChange = this.handleFormChange.bind(this);
    }
    handleFormChange(e) {
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        
        var temp = this.props.cur_item;
        temp[e.target.name] = value;
        
        this.props.handleFormChange(temp);
    }
    render() {
        return (
            <div>
                <FormInput handleFormChange={this.handleFormChange} type="text"
                    val={this.props.cur_item.label}
                    name="label" displayName="Name" icon="fa-user" />
                <FormInput handleFormChange={this.handleFormChange} type="text"
                    val={this.props.cur_item.description}
                    name="description" displayName="Description" icon="fa-user" />
            </div>
        );
    }
}
export default ItemForm;