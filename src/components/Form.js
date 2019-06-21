import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        this.initialState = {
            name: '',
            job: ''
        }
        this.state = this.initialState;
    }

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({
            [name]: value
        })
    }

    submitForm = () => {
        this.props.handleSubmit(this.state);
        this.setState(this.initialState);
    }

    render() {
        const { name, job } = this.state;

        return (
            <form className="field">
                <label className="label">Name</label>
                <input
                    className="input"
                    type="text"
                    name="name"
                    value={name}
                    onChange={this.handleChange} />
                <label className="label">Job</label>
                <input
                    className="input"
                    type="text"
                    name="job"
                    value={job}
                    onChange={this.handleChange} />
                <div className="control" style={{marginTop: '20px'}}>
                    <input className="button is-info" type="button" value="submit" onClick={this.submitForm}/>
                </div>
            </form>
        );
    }
}
 
export default Form;