import React from 'react';

import GreetingContainer from '../components/greeting/greeting_container';
import LoginFormContainer from '../components/login&signup/login_form_container';
import SignupFormContainer from '../components/login&signup/signup_form_container';
import{Route} from 'react-router-dom';
import {AuthRoute} from '../util/route_util';

const App = () => (
    <div>
        <h1>
            Bench BNB
        </h1>
        <Route path="/" component={GreetingContainer} />
        <AuthRoute path="/login" component={LoginFormContainer} />
        <AuthRoute path="/signup" component={SignupFormContainer} />
    </div>
);

export default App;