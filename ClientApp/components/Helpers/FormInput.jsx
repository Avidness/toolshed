import React from 'react';

class FormInput extends React.Component {
    
    render() {
        const icon_classes = `${this.props.icon} fa fa-fw fa-lg`;

        return (
            <div>
                <label htmlFor={this.props.name} className="label label-default form-control">
                    <i className={icon_classes}></i> {this.props.displayName}
                </label>
                <input id={this.props.name} name={this.props.name} type={this.props.type} placeholder={this.props.displayName}
                    className="form-control input-md"
                    value={this.props.val || ''}
                    onChange={this.props.handleFormChange} />
            </div>
        );
    }
}
export default FormInput;