
import React from 'react';

class FormSelection extends React.Component {
    
    render() {
        
        const icon_classes = `${this.props.icon} fa fa-fw fa-lg`;

        return (
            <div>
                <label htmlFor={this.props.name} className="label label-default form-control">
                    <i className={icon_classes}></i> {this.props.displayName}
                </label>
                <select id={this.props.name} name={this.props.name} type={this.props.type}
                    className="form-control input-md"
                    value={this.props.val || ''} onChange={this.props.handleFormChange}>
                    <option>Select</option>
                    {this.props.form_options}
                </select>
            </div>
        );
    }
}
export default FormSelection;