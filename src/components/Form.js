import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Form extends Component {

    state = {
        username: "",
        password: ""
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.handleSubmit(this.state)
        this.props.history.push('/'); // <--- The page you want to redirect your user to.
    }

    handleChange = (e) => {
        let {name, value} = e.target
        this.setState({
        [name]: value
        })
    }

    render() {
        let {username, password} = this.state

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="username">Username<input name="username" type="username" className="form-control" value={username} onChange={this.handleChange} /></label>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password<input name="password" type="password" className="form-control" value={password} onChange={this.handleChange} /></label>
                    </div>
                    <button className="btn btn-primary" value="Submit" >Submit</button>
                </form>
            </div>
        );
    }
}

export default withRouter(Form);