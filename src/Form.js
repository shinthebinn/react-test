import React from "react"

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            placeholder: props.placeholder,
            value: '',
            submitFunc: props.submitFunc
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({
            value: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        this.state.submitFunc(this.state.value)
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <input type="text" id="inputField" placeholder={this.state.placeholder} value={this.state.value} onChange={this.handleChange} />
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default Form