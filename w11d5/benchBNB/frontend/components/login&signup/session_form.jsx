import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            email: '',
            password: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(e){
        e.preventDefault();
        this.props.processForm(this.state);
    }
    update(field){
        return e => this.setState({ [field]: e.currentTarget.value });
    }
    render(){
        const {errors, formType} = this.props;
        const linkType = formType === 'signup' ? 'login':'signup';
        return(
            <div>
                <form >
                    <Link to={`/${linkType}`}>{linkType}</Link>
                    <h1>{formType}</h1>
                    <label >Username
                    <input type="text"
                            value={this.state.username}
                            onChange={this.update('username')}
                        />
                    </label>
                    <label >Email
                    <input type="text"
                            value={this.state.email}
                            onChange={this.update('email')}
                        />
                    </label>
                    <label >Password
                    <input type="password"
                            value={this.state.password}
                            onChange={this.update('password')}
                        />
                    </label>
                    <button onClick={this.handleSubmit}>{formType}</button>
                </form>
                <ul>
                    {
                        errors.map(e => {
                            return <li>{e}</li>
                        })
                    }
                </ul>
            </div>
        );
    }
}
export default SessionForm;