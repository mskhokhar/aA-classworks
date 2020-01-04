import React from 'react';
import {Link} from 'react-router-dom';

class Greeting extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        const {currentUser, logout} = this.props;

        const greetingContent = currentUser ? (
            <div>
                <h2>Welcome {currentUser.username} !!!</h2>
                <button onClick={logout}>Log Out</button> 
            </div>
        ) : (
            <div>
                <Link to="/signup">Sign Up</Link>
                <Link to="/login">Log In</Link>
            </div>
        );
        
        return greetingContent ;
    }
}
export default Greeting;